
import axios from "axios";
import React from "react";
const Home = ({ covids }) => {
    return (
        <>
            <h1>Thông tin COVID-19 tại Việt Nam</h1>
            <table >
                <thead>
               <tr>
                   <th>Date</th>
                   <th>confirmed</th>
                   <th>active</th>
                   <th>recovered</th>
                   <th>deaths</th>
               </tr>
                </thead>
                <tbody>
                {covids.map((data) => (
                <tr key={data.id}>
                    <td> {data.date}</td>
                    <td>{data.confirmed}</td>
                    <td> {data.active}</td>
                    <td> {data.recovered}</td>
                    <td>{data.deaths}</td>
                </tr>
                ))}
                </tbody>
                 </table>

            </>
    );
};
export const getStaticProps = async () => {
    try {
        const response = await axios.get('http://localhost:8080/covids');
        const covids = response.data                    ;
        return {
            props: {
                covids: covids
            },
        };
    } catch (error) {
        console.error('Error fetching COVID-19 data:', error.message);
        return {
            props: {
                covids: [],
            },
        };
    }
};
export default Home;
