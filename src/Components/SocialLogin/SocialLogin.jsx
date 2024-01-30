
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import googleLogo from '../../assets/image/googleLogo.png'
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const SocialLogin = () => {
    const axiosPublic = useAxiosPublic();


    const { googleSignIn } = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res);
                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName,
                    photoURL: res.user?.photoURL
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "User Log in Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        console.log(res.user);
                        navigate(location?.state ? location.state : '/');
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <div className="space-y-3 my-4">
                <button onClick={handleGoogleLogIn} className="flex items-center gap-3 w-full justify-center rounded-3xl p-2 outline outline-1 outline-slate-800 mx-auto"><img src={googleLogo} className="w-6" alt="" /> Continue With Google</button>
                {/* <button onClick={handleGithubLogIn} className="flex items-center gap-3 w-3/4 rounded-3xl p-2 outline outline-1 outline-slate-800 mx-auto"><FaGithub></FaGithub>Continue With Github</button> */}
            </div>
        </div>
    );
};

export default SocialLogin;