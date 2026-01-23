import React, { useState, useEffect, useMemo } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
} from 'react-simple-maps';
import styles from './WorldMap.module.css';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

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

// ISO 3166-1 alpha-3 to country name mapping for common countries
const countryNames = {
    USA: 'United States',
    GBR: 'United Kingdom',
    DEU: 'Germany',
    FRA: 'France',
    ITA: 'Italy',
    RUS: 'Russia',
    CHN: 'China',
    JPN: 'Japan',
    IND: 'India',
    BRA: 'Brazil',
    CAN: 'Canada',
    AUS: 'Australia',
    MEX: 'Mexico',
    KOR: 'South Korea',
    ESP: 'Spain',
    IDN: 'Indonesia',
    TUR: 'Turkey',
    SAU: 'Saudi Arabia',
    ARG: 'Argentina',
    ZAF: 'South Africa',
    NGA: 'Nigeria',
    EGY: 'Egypt',
    POL: 'Poland',
    NLD: 'Netherlands',
    SWE: 'Sweden',
    CHE: 'Switzerland',
    NOR: 'Norway',
    PAK: 'Pakistan',
    BGD: 'Bangladesh',
    VNM: 'Vietnam',
    THA: 'Thailand',
    PHL: 'Philippines',
    MYS: 'Malaysia',
    COL: 'Colombia',
    CHL: 'Chile',
    PER: 'Peru',
    VEN: 'Venezuela',
    IRN: 'Iran',
    IRQ: 'Iraq',
    ISR: 'Israel',
    ARE: 'UAE',
    SGP: 'Singapore',
    HKG: 'Hong Kong',
    NZL: 'New Zealand',
    IRL: 'Ireland',
    DNK: 'Denmark',
    FIN: 'Finland',
    AUT: 'Austria',
    BEL: 'Belgium',
    PRT: 'Portugal',
    GRC: 'Greece',
    CZE: 'Czech Republic',
    ROU: 'Romania',
    HUN: 'Hungary',
    UKR: 'Ukraine',
    KAZ: 'Kazakhstan',
    UZB: 'Uzbekistan',
    ETH: 'Ethiopia',
    KEN: 'Kenya',
    TZA: 'Tanzania',
    GHA: 'Ghana',
    CIV: 'Ivory Coast',
    MAR: 'Morocco',
    DZA: 'Algeria',
    AGO: 'Angola',
    SDN: 'Sudan',
    TUN: 'Tunisia',
    LBY: 'Libya',
};

const WorldMap = () => {
    const [gdpData, setGdpData] = useState(null);
    const [selectedYear, setSelectedYear] = useState(2020);
    const [hoveredCountry, setHoveredCountry] = useState(null);
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

    const years = [1900, 1913, 1929, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];

    useEffect(() => {
        fetch('/data/gdp-historical.json')
            .then(res => res.json())
            .then(data => setGdpData(data))
            .catch(err => console.error('Error loading GDP data:', err));
    }, []);

    // Get GDP values for the selected year
    const yearData = useMemo(() => {
        if (!gdpData) return {};

        const yearIndex = years.indexOf(selectedYear);
        const result = {};

        Object.entries(gdpData.data).forEach(([code, values]) => {
            result[code] = values[yearIndex] || 0;
        });

        return result;
    }, [gdpData, selectedYear]);

    // Calculate max GDP for color scaling
    const maxGdp = useMemo(() => {
        return Math.max(...Object.values(yearData), 1);
    }, [yearData]);

    // Get top 10 economies for the selected year
    const topEconomies = useMemo(() => {
        return Object.entries(yearData)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(([code, value]) => ({
                code,
                name: countryNames[code] || code,
                gdp: value,
            }));
    }, [yearData]);

    const handleMouseMove = (e) => {
        setTooltipPos({ x: e.clientX, y: e.clientY });
    };

    const getCountryGdp = (geo) => {
        // Try different property names for country code
        const code = geo.properties.ISO_A3 || geo.properties.iso_a3 || geo.id;
        return { code, gdp: yearData[code] || 0 };
    };

    if (!gdpData) {
        return <div className={styles.loading}>Loading GDP data...</div>;
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>World GDP Over Time</h2>
            <p className={styles.subtitle}>GDP in billions USD (2011 prices)</p>

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
                    {years.map((year) => (
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
                                    const countryName = countryNames[code] || geo.properties.name || code;

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
                            <span className={styles.countryName}>{economy.name}</span>
                            <span className={styles.gdpValue}>${economy.gdp.toLocaleString()}B</span>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default WorldMap;
