import { useState, useEffect } from "react"
import api from "../api"
import Details from "../components/Details"
import "../styles/Home.css"

function Home() {
    const [userDetails, setUserDetails] = useState([]);
    const [client_qualifications, setQualifications] = useState("")
    const [client_skills, setSkills] = useState("")
    const [client_preferences, setPreferences] = useState("")
    const [fullname, setFullname] = useState("")

    useEffect(() => {
        getUserDetails();
    }, []);

    const getUserDetails = () => {
        api
            .get("/api/userdetails/")
            .then((res) => res.data)
            .then((data) => { setUserDetails(data); console.log(data) })
            .catch((err) => alert(err));
    };

    const deleteUserDetails = (id) => {
        api.delete(`/api/userdetails/delete/${id}/`).then((res) => {
            if (res.status == 204) alert("Client Details Deleted!")
            else alert("Failed to delete Client Details...")
        }).catch((error) => alert(error))
        getUserDetails();
    };

    const createUserDetails = (e) => {
        e.preventDefault()
        api
            .post("/api/userdetails/", { fullname, client_skills, client_qualifications, client_preferences })
            .then((res) => {
                if (res.status === 201) alert("Saved Client Details!");
                else alert("Failed to save Client Details...");
            })
            .catch((err) => alert(err));
        getUserDetails();
    };

    return (
        <div>
            <div>
                <h2>Client Details</h2>
                {userDetails.map((details) => (
                    <Details details={details} onDelete={deleteUserDetails} key={details.id} />
                ))}
            </div>
            <h2>Update Client Details</h2>
            <form onSubmit={createUserDetails}>
                <label htmlFor="fullname">Full Name:</label>
                <br />
                <input 
                    type="text" 
                    id="fullname" 
                    name="fullname" 
                    required 
                    onChange={(e) => setFullname(e.target.value)}
                    value={fullname}
                />
                <label htmlFor="client_skills">Skills:</label>
                <br />
                <textarea 
                    id="client_skills" 
                    name="client_skills" 
                    required 
                    value={client_skills} 
                    onChange={(e) => setSkills(e.target.value)}
                ></textarea>
                <label htmlFor="client_qualifications">Qualifications:</label>
                <br />
                <textarea 
                    id="client_qualifications" 
                    name="client_qualifications" 
                    required 
                    value={client_qualifications} 
                    onChange={(e) => setQualifications(e.target.value)}
                ></textarea>
                <label htmlFor="client_preferences">Job Preferences:</label>
                <br />
                <textarea 
                    id="client_preferences" 
                    name="client_preferences" 
                    required 
                    value={client_preferences} 
                    onChange={(e) => setPreferences(e.target.value)}
                ></textarea>
                <br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Home