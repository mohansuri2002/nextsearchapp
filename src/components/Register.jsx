import react, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        loading: "",
    });
    const navigate = useNavigate();
    const { name, email, password, error, loading } = data;
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const handleSumbit = async (e) => {
        e.preventDefault();
        setData({ ...data, error: null, loading: true });
        if (!name || !email || !password) {
            setData({ ...data, error: 'All fields are required' });
        } else {
            try {

                const result = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password,
                )

                await setDoc(doc(db, 'users', result.user.uid), {
                    uid: result.user.uid,
                    name,
                    email,
                    createdAt: Timestamp.fromDate(new Date()),
                    isOnline: true,

                });

                setData({
                    name: "",
                    email: "",
                    password: "",
                    error: null,
                    loading: false,
                });
                navigate('/');

            } catch (err) {
                setData({ ...data, error: err.message, loading: false });
            }
        }
    }
    return (
        <section>
            <h3>Creat an Account</h3>
            <form className="form" onSubmit={handleSumbit}>
                <div className='input_container'>
                    <label htmlFor='name'>Name</label>
                    <input type="text" name='name' value={name} onChange={handleChange} />
                </div>
                <div className='input_container'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name='email' value={email} onChange={handleChange} />
                </div>
                <div className='input_container'>
                    <label htmlFor='password'>password</label>
                    <input type="password" name='password' value={password} onChange={handleChange} />
                </div>
                {error ? <p className='error'>{error}</p> : null}
                <div className='btn_container'>
                    <button className='btn'>{loading ? 'Creating in...' : 'Register'}</button>
                </div>
            </form>
        </section>
    )
};
export default Register;