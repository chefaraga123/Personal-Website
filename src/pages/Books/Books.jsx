import React, { useEffect, useState } from 'react';
//import styles from './Books.module.css';
import Navigation from '../../components/Navigation/Navigation';
//import Book from '../../components/Book/Book';


const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        // Fetch the JSON data from the public directory
        fetch('/BookData.json')
          .then(response => response.json())
          .then(data => {
            setBooks(data); // Set the fetched data to state
          })
          .catch(error => {
            console.error('Error fetching books:', error);
          });
      }, []); // Empty dependency array means this effect runs once on mount

     return (
        <div>
        <Navigation />
          <h1>Books I've Read</h1>
          <ul>

            <h3>Video Games</h3>
            <li><strong>One Up: Global Business of the Games Industry</strong> by Joost Van Dreunen</li>
            <li><strong>Blood Sweat and Pixels</strong> by Jason Schreier</li>
            <li><strong>Pyramid of Games Design</strong> by </li>

            <h3>Entrepreneurship & Management</h3>
            <li><strong>The Lean Startup</strong> by Eric Ries</li>


            <h3>Economics</h3>
            <li><strong>Machine Dreams: Economics as a Cyborg Science </strong> by Philip Mirowski</li>
            <li><strong>The knowledge we have lost in information</strong> by Philip Mirowski</li>
            <li><strong>Science-Mart: Privatising American Science</strong> by Philip Mirowski</li>

            <h3>Politics</h3>
            <li><strong>The Road from Mont Pelerin</strong> by Philip Mirowski</li>
            <li><strong>On China</strong> by Henry Kissinger</li>
            <li><strong>The Politics of Nuclear Weapons</strong> by __</li>
            <li><strong>Understanding UK Military Capability</strong> by Andrew Curtis</li>
            <li><strong>The Great Illusion</strong> by Norman Angell</li>
            <li><strong>The Concept of the Political </strong> by Carl Schmitt</li>
            <li><strong>Land and Sea </strong> by Carl Schmitt</li>


            <h3>Psychology</h3>
            <li><strong>Moral Indignation & Middle Class Psychology</strong> by __</li>
            <li><strong>Fear of Freedom</strong> by Erich Froom</li>


            <h3>Systems</h3>
            <li><strong>Introduction to Systems Theory</strong> by Niklas Luhmann</li>
            <li><strong>The Myth of Artificial Intelligence</strong> by Erik Larson</li>
            <li><strong>Shorting the Grid</strong> by Meredith Angwin</li>
            <li><strong>Chip War</strong> by Chris Miller</li>


            <h3>Biographies</h3>
            <li><strong>Retrospect</strong> by Robert McNamara</li>
            <li><strong>The Years of Lyndon Johnson</strong> by Robert Caro</li>
            <li><strong>The Power Broker</strong> by Robert Caro</li>
            <li><strong>Henry Kissinger & American Power </strong> by _</li>
            <li><strong>The Making of Oliver Cromwell </strong> by _</li>
            <li><strong>Pieces of the Action </strong> by Vannevar Bush</li>
            <li><strong>Citizen Clem </strong> by John Bew</li>
            <li><strong>Team of Rivals </strong> by Doris Kearns</li>
            <li><strong>The Audacity to Win </strong> by David Plouffe</li>


            <h3>History</h3>
            <li><strong>Technics & Civlisation</strong> by Lewis Mumford</li>
            <li><strong>Decline of the West</strong> by Oswald Spengler</li>
            <li><strong>The Box</strong> by _</li>
            <li><strong>The World for Sale</strong> by _</li>
            <li><strong>Technics & Civlisation</strong> by Lewis Mumford</li>
            <li><strong>A Global History of Money</strong> by Akinobu Kuroda</li>


            <h3>Philosophy</h3>
            <li><strong>Philosophy & Simulation: The Emergence of Synthetic Reason</strong> by Manuel De Landa</li>
            <li><strong>A Thousand Years of Non-Linear History</strong> by Manuel De Landa</li>
            <li><strong>Simulacra & Simulation</strong> by Jean Baudrillard</li>

            <h3>Fiction</h3>
            <li><strong>Foundation</strong> by Isaac Asimov</li>



          </ul>
        </div>
      );

  };

export default Books;

