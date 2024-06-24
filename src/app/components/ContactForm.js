'use client'
import React, { useState } from 'react'
import styles from "@/app/contact/contact.module.css"
import stylesbtn from "@/app/styles/common.module.css"


const ContactForm = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        message: ""
    })
    const [status, setStatus] = useState(null);

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    message: user.message
                })
            })

            if (response.status === 200) {
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    message: ""
                })
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (e) {
            console.log(e)
            setStatus('error');
        }
    }

    return (
        <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.input_fields}>
                <label htmlFor="username" className={styles.label}>
                    Name:
                    <input type="text" name="username" id="username" placeholder="Enter your Name"
                        value={user.username}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                    />
                </label>
            </div>
            <div className={styles.input_fields}>
                <label htmlFor="email" className={styles.label}>
                    Email:
                    <input type="text" name="email" id="email" placeholder="Enter your Email Id"
                        value={user.email}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                    />
                </label>
            </div>
            <div className={styles.input_fields}>
                <label htmlFor="phone" className={styles.label}>
                    Phone Number:
                    <input type="number" name="phone" id="phone" placeholder="Enter your Phone Number"
                        value={user.phone}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                    />
                </label>
            </div>
            <div className={styles.input_fields}>
                <label htmlFor="message" className={styles.label}>
                    Message:
                    <textarea name="message" id="message" rows={5} placeholder="Enter your Message"
                        value={user.message}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                    />
                </label>
            </div>
            <div>
            {status === 'success' && <p className={styles.success}>Message sent successfully!</p>}
            {status === 'error' && <p className={styles.error}>Error sending message. Please try again.</p>}
                <button className={stylesbtn.btn} type="submit">Send Message</button>
            </div>
        </form>
    )
}

export default ContactForm