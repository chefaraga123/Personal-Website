import React, { useState, useEffect, useMemo } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
} from 'react-simple-maps';
import styles from './WorldMap.module.css';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// World Bank API for GDP (current USD)
const WORLD_BANK_API = 'https://api.worldbank.org/v2/country/all/indicator/NY.GDP.MKTP.CD?format=json&per_page=20000&date=1960:2022';

// Color scale for GDP (log scale works better for economic data)
const getColor = (value, maxValue) => {
    if (!value || value === 0) return '#f0f0f0';

    // Use log scale for better distribution
    const logValue = Math.log10(value + 1);
    const logMax = Math.log10(maxValue + 1);
    const ratio = logValue / logMax;

    // Color gradient from light yellow to dark red
    const colors = [
        { pos: 0, r: 255, g: 255, b: 220 },
        { pos: 0.25, r: 254, g: 217, b: 142 },
        { pos: 0.5, r: 254, g: 153, b: 41 },
        { pos: 0.75, r: 217, g: 72, b: 1 },
        { pos: 1, r: 127, g: 0, b: 0 },
    ];

    // Find the two colors to interpolate between
    let lower = colors[0];
    let upper = colors[colors.length - 1];

    for (let i = 0; i < colors.length - 1; i++) {
        if (ratio >= colors[i].pos && ratio <= colors[i + 1].pos) {
            lower = colors[i];
            upper = colors[i + 1];
            break;
        }
    }

    const range = upper.pos - lower.pos;
    const rangePct = range === 0 ? 0 : (ratio - lower.pos) / range;

    const r = Math.round(lower.r + rangePct * (upper.r - lower.r));
    const g = Math.round(lower.g + rangePct * (upper.g - lower.g));
    const b = Math.round(lower.b + rangePct * (upper.b - lower.b));

    return `rgb(${r}, ${g}, ${b})`;
};

// ISO 3166-1 numeric to ISO3 mapping (for TopoJSON to World Bank data)
const numericToIso3 = {
    '840': 'USA', '826': 'GBR', '276': 'DEU', '250': 'FRA', '380': 'ITA',
    '643': 'RUS', '156': 'CHN', '392': 'JPN', '356': 'IND', '076': 'BRA',
    '124': 'CAN', '036': 'AUS', '484': 'MEX', '410': 'KOR', '724': 'ESP',
    '360': 'IDN', '792': 'TUR', '682': 'SAU', '032': 'ARG', '710': 'ZAF',
    '566': 'NGA', '818': 'EGY', '616': 'POL', '528': 'NLD', '752': 'SWE',
    '756': 'CHE', '578': 'NOR', '586': 'PAK', '050': 'BGD', '704': 'VNM',
    '764': 'THA', '608': 'PHL', '458': 'MYS', '170': 'COL', '152': 'CHL',
    '604': 'PER', '862': 'VEN', '364': 'IRN', '368': 'IRQ', '376': 'ISR',
    '784': 'ARE', '702': 'SGP', '344': 'HKG', '554': 'NZL', '372': 'IRL',
    '208': 'DNK', '246': 'FIN', '040': 'AUT', '056': 'BEL', '620': 'PRT',
    '300': 'GRC', '203': 'CZE', '642': 'ROU', '348': 'HUN', '804': 'UKR',
    '398': 'KAZ', '860': 'UZB', '231': 'ETH', '404': 'KEN', '834': 'TZA',
    '288': 'GHA', '384': 'CIV', '504': 'MAR', '012': 'DZA', '024': 'AGO',
    '729': 'SDN', '788': 'TUN', '434': 'LBY', '004': 'AFG', '008': 'ALB',
    '020': 'AND', '031': 'AZE', '048': 'BHR', '051': 'ARM', '070': 'BIH',
    '096': 'BRN', '100': 'BGR', '104': 'MMR', '112': 'BLR', '116': 'KHM',
    '144': 'LKA', '158': 'TWN', '180': 'COD', '191': 'HRV', '196': 'CYP',
    '218': 'ECU', '233': 'EST', '268': 'GEO', '270': 'GMB', '320': 'GTM',
    '340': 'HND', '352': 'ISL', '400': 'JOR', '414': 'KWT', '417': 'KGZ',
    '418': 'LAO', '422': 'LBN', '428': 'LVA', '440': 'LTU', '442': 'LUX',
    '446': 'MAC', '470': 'MLT', '496': 'MNG', '498': 'MDA', '499': 'MNE',
    '512': 'OMN', '524': 'NPL', '558': 'NIC', '562': 'NER',
    '591': 'PAN', '600': 'PRY', '634': 'QAT', '688': 'SRB',
    '703': 'SVK', '705': 'SVN', '760': 'SYR', '762': 'TJK', '795': 'TKM',
    '800': 'UGA', '807': 'MKD', '858': 'URY',
    '887': 'YEM', '894': 'ZMB', '716': 'ZWE',
};

const WorldMap = () => {
    const [gdpData, setGdpData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedYear, setSelectedYear] = useState(2020);
    const [hoveredCountry, setHoveredCountry] = useState(null);
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

    // Generate years from 1960 to 2022
    const years = useMemo(() => {
        const arr = [];
        for (let y = 1960; y <= 2022; y++) {
            arr.push(y);
        }
        return arr;
    }, []);

    useEffect(() => {
        const fetchGdpData = async () => {
            try {
                setLoading(true);
                const response = await fetch(WORLD_BANK_API);
                const json = await response.json();

                // World Bank API returns [metadata, data]
                const rawData = json[1];
                if (!rawData) {
                    throw new Error('No data returned from World Bank API');
                }

                // Transform data into { countryCode: { year: value } } format
                const transformed = {};
                rawData.forEach(item => {
                    // World Bank uses 'countryiso3code' or nested 'country.id'
                    const code = item.countryiso3code || item.country?.id;
                    const year = parseInt(item.date);
                    const value = item.value;

                    if (value !== null && code && code.length <= 3) {
                        if (!transformed[code]) {
                            transformed[code] = {};
                        }
                        // Convert to billions
                        transformed[code][year] = value / 1e9;
                    }
                });

                setGdpData(transformed);
                setError(null);
            } catch (err) {
                console.error('Error fetching GDP data:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchGdpData();
    }, []);

    // Get GDP values for the selected year
    const yearData = useMemo(() => {
        if (!gdpData) return {};

        const result = {};
        Object.entries(gdpData).forEach(([code, yearValues]) => {
            result[code] = yearValues[selectedYear] || 0;
        });

        return result;
    }, [gdpData, selectedYear]);

    // Calculate max GDP for color scaling
    const maxGdp = useMemo(() => {
        return Math.max(...Object.values(yearData), 1);
    }, [yearData]);

    // Get top 10 economies for the selected year
    const topEconomies = useMemo(() => {
        // World Bank aggregate/region codes to exclude
        const aggregateCodes = new Set([
            'WLD', 'OED', 'PST', 'IBT', 'IBD', 'LMY', 'MIC', 'EAS', 'LTE', 'EUU',
            'EMU', 'ECS', 'LCN', 'NAC', 'SAS', 'SSF', 'MEA', 'ARB', 'CSS', 'CEB',
            'EAP', 'ECA', 'HIC', 'HPC', 'LAC', 'LDC', 'LIC', 'LMC', 'MNA', 'OEC',
            'OSS', 'PRE', 'PSS', 'SSA', 'SST', 'TEA', 'TEC', 'TLA', 'TMN', 'TSA',
            'TSS', 'UMC', 'FCS', 'IDA', 'IDX', 'INX', 'AFE', 'AFW', 'IDB',
        ]);

        const countryData = Object.entries(yearData)
            .filter(([code, value]) =>
                code.length === 3 &&
                value > 0 &&
                !aggregateCodes.has(code)
            );

        return countryData
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(([code, value]) => ({
                code,
                gdp: value,
            }));
    }, [yearData]);

    const handleMouseMove = (e) => {
        setTooltipPos({ x: e.clientX, y: e.clientY });
    };

    const getCountryGdp = (geo) => {
        // The TopoJSON uses numeric IDs, convert to ISO3 (World Bank format)
        const numericId = geo.id;
        const paddedId = String(numericId).padStart(3, '0');
        const iso3 = numericToIso3[numericId] || numericToIso3[paddedId];
        const gdp = yearData[iso3] || 0;
        return { code: iso3 || numericId, gdp };
    };

    // Get country name from ISO3 code
    const getCountryName = (code, geo) => {
        // Common country names for display (ISO3 codes)
        const names = {
            USA: 'United States', GBR: 'United Kingdom', DEU: 'Germany', FRA: 'France',
            ITA: 'Italy', RUS: 'Russia', CHN: 'China', JPN: 'Japan', IND: 'India',
            BRA: 'Brazil', CAN: 'Canada', AUS: 'Australia', MEX: 'Mexico', KOR: 'South Korea',
            ESP: 'Spain', IDN: 'Indonesia', TUR: 'Turkey', SAU: 'Saudi Arabia',
            ARG: 'Argentina', ZAF: 'South Africa', NGA: 'Nigeria', EGY: 'Egypt',
            POL: 'Poland', NLD: 'Netherlands', SWE: 'Sweden', CHE: 'Switzerland',
            NOR: 'Norway', PAK: 'Pakistan', BGD: 'Bangladesh', VNM: 'Vietnam',
            THA: 'Thailand', PHL: 'Philippines', MYS: 'Malaysia', COL: 'Colombia',
            CHL: 'Chile', PER: 'Peru', VEN: 'Venezuela', IRN: 'Iran', IRQ: 'Iraq',
            ISR: 'Israel', ARE: 'UAE', SGP: 'Singapore', HKG: 'Hong Kong',
            NZL: 'New Zealand', IRL: 'Ireland', DNK: 'Denmark', FIN: 'Finland',
            AUT: 'Austria', BEL: 'Belgium', PRT: 'Portugal', GRC: 'Greece',
            CZE: 'Czech Republic', ROU: 'Romania', HUN: 'Hungary', UKR: 'Ukraine',
            TWN: 'Taiwan', TZA: 'Tanzania', KEN: 'Kenya', ETH: 'Ethiopia',
            MAR: 'Morocco', DZA: 'Algeria', AGO: 'Angola', SDN: 'Sudan',
            KAZ: 'Kazakhstan', UZB: 'Uzbekistan', QAT: 'Qatar', KWT: 'Kuwait',
            OMN: 'Oman', LBN: 'Lebanon', JOR: 'Jordan', SYR: 'Syria',
        };
        return names[code] || geo?.properties?.name || code;
    };

    if (loading) {
        return <div className={styles.loading}>Loading GDP data from World Bank...</div>;
    }

    if (error) {
        return <div className={styles.loading}>Error loading data: {error}</div>;
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>World GDP Over Time</h2>
            <p className={styles.subtitle}>GDP in billions USD (current prices) — Data: World Bank</p>

            <div className={styles.sliderContainer}>
                <label htmlFor="year-slider" className={styles.sliderLabel}>
                    Year: <strong>{selectedYear}</strong>
                </label>
                <input
                    id="year-slider"
                    type="range"
                    min={0}
                    max={years.length - 1}
                    value={years.indexOf(selectedYear)}
                    onChange={(e) => setSelectedYear(years[parseInt(e.target.value)])}
                    className={styles.slider}
                />
                <div className={styles.yearMarkers}>
                    {[1960, 1970, 1980, 1990, 2000, 2010, 2020].map((year) => (
                        <span
                            key={year}
                            className={`${styles.yearMarker} ${year === selectedYear ? styles.active : ''}`}
                            onClick={() => setSelectedYear(year)}
                        >
                            {year}
                        </span>
                    ))}
                </div>
            </div>

            <div className={styles.mapContainer} onMouseMove={handleMouseMove}>
                <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{
                        scale: 120,
                        center: [0, 30],
                    }}
                    style={{ width: '100%', height: 'auto' }}
                >
                    <ZoomableGroup>
                        <Geographies geography={geoUrl}>
                            {({ geographies }) =>
                                geographies.map((geo) => {
                                    const { code, gdp } = getCountryGdp(geo);
                                    const countryName = getCountryName(code, geo);

                                    return (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            fill={getColor(gdp, maxGdp)}
                                            stroke="#999"
                                            strokeWidth={0.5}
                                            onMouseEnter={() => {
                                                setHoveredCountry({
                                                    name: countryName,
                                                    gdp: gdp,
                                                    code: code,
                                                });
                                            }}
                                            onMouseLeave={() => {
                                                setHoveredCountry(null);
                                            }}
                                            style={{
                                                default: { outline: 'none' },
                                                hover: {
                                                    outline: 'none',
                                                    stroke: '#333',
                                                    strokeWidth: 1.5,
                                                },
                                                pressed: { outline: 'none' },
                                            }}
                                        />
                                    );
                                })
                            }
                        </Geographies>
                    </ZoomableGroup>
                </ComposableMap>

                {hoveredCountry && (
                    <div
                        className={styles.tooltip}
                        style={{
                            left: tooltipPos.x + 10,
                            top: tooltipPos.y - 40,
                        }}
                    >
                        <strong>{hoveredCountry.name}</strong>
                        <br />
                        GDP: ${hoveredCountry.gdp > 0 ? hoveredCountry.gdp.toLocaleString() : 'N/A'}B
                    </div>
                )}
            </div>

            <div className={styles.legend}>
                <span className={styles.legendLabel}>Lower GDP</span>
                <div className={styles.legendGradient}></div>
                <span className={styles.legendLabel}>Higher GDP</span>
            </div>

            <div className={styles.topEconomies}>
                <h3>Top 10 Economies in {selectedYear}</h3>
                <ol className={styles.economyList}>
                    {topEconomies.map((economy, index) => (
                        <li key={economy.code} className={styles.economyItem}>
                            <span className={styles.rank}>{index + 1}.</span>
                            <span className={styles.countryName}>{getCountryName(economy.code)}</span>
                            <span className={styles.gdpValue}>${Math.round(economy.gdp).toLocaleString()}B</span>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default WorldMap;
