import React, { useEffect, useState } from 'react';
import Camera from '../components/svg/Camera';
import image from '../logo.jpg';
import { storage, db, auth } from '../firebase';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import Delete from '../components/svg/Delete';
import { useNavigate } from 'react-router-dom';
import { ref, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
const Profile = () => {
    const [img, setImg] = useState('');
    const [userval, setUser] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        getDoc(doc(db, 'users', auth.currentUser.uid)).then((docSnap) => {
            if (docSnap.exists) {
                setUser(docSnap.data());
            }
        })

        if (img) {

            const uploadImg = async () => {
                const imgRef = ref(
                    storage,
                    `avatar/${new Date().getTime()}-${img.name}`
                );
                try {
                    if (userval.avatarPath) {
                        await deleteObject(ref(storage, userval.avatarPath));
                    }
                    const snap = await uploadBytes(imgRef, img);
                    const url = await getDownloadURL(ref(storage, snap.ref.fullPath));
                    await updateDoc(doc(db, 'users', auth.currentUser.uid), {
                        avatar: url,
                        avatarPath: snap.ref.fullPath,
                    });
                    console.log(url);
                    setImg('');
                } catch (err) {
                    console.log(err.message);
                }
            };
            uploadImg();
        }
    }, [img]);
    const deleteImage = async () => {
        try {
            const confirm = window.confirm('Delete Avatar?');
            if (confirm) {
                await deleteObject(ref(storage, userval.avatarPath));
                await updateDoc(doc(db, 'users', auth.currentUser.uid), {
                    avatar: "",
                    avatarPath: "",
                });
                navigate('/')
            }
        } catch (err) {
            console.log(err.message);
        }
    };
    return userval ? (
        <section>
            <div className='profile_container'>
                <div className='img_container'>
                    <img src={userval.avatar || image} alt='avatar' />
                    <div className='overlay'>
                        <div>
                            <label htmlFor='photo'>
                                <Camera />
                            </label>
                            {userval.avatar ? <Delete deleteImage={deleteImage} /> : null}
                            <input type='file' accept='image/*' style={{ display: 'none' }} id='photo' onChange={(e) => setImg(e.target.files[0])} />
                        </div>
                    </div>
                </div>
                <div className='text_container'>
                    <h3>{userval.name}</h3>
                    <p>{userval.email}</p>
                    <hr />
                    <small>Joined on :{userval.createdAt.toDate().toDateString()}</small>
                </div>
            </div>
        </section>
    ) : null;
};
export default Profile;