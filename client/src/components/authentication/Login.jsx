import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { loginUserApi } from './signupapi';
import { Link } from 'react-router-dom';

export default function Login() {
  const history = useNavigate();

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const loginUser = async (e) => {
    try {
      e.preventDefault();
      const { password, email } = form;

      if (password.length <= 8) {
        toast.error('Password should be greater than 8 characters');
        return;
      }
      if (email.length === 0) {
        toast.error('Please enter email');
        return;
      }

      const { data } = await loginUserApi(form);
      if (data?.user?.email) {
        history('/dashboard');
      }
    } catch (error) {
      if (error.message === 'Request failed with status code 401') {
        toast.error('Email or Password Wrong');
      }
      console.log(error);
    }
  };

  const [form, setForm] = useState({ email: '', password: '' });

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-600 p-6">
      <div className="max-w-screen-xl w-full flex flex-col md:flex-row bg-white rounded-xl p-10 shadow-lg">
        <div className="md:w-1/2 md:pr-12">
          <img alt="" src="/favicon.png" className="mb-4" />
          <h1 className="text-4xl text-slate-600">Research Sync</h1>
          <div className="text-gray-600 text-xl leading-6 tracking-widest mt-5">
            ResearchCollab: Unifying Collaboration Efforts
          </div>
          <div className="text-gray-600 text-lg leading-5 tracking-wider mt-3">
            Manage your research and collaborate through an all-in-one platform.
          </div>
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="flex flex-col items-center w-full">
            <div className="flex mb-4">
              <span className="border flex items-stretch justify-between gap-3 px-3 py-2 rounded-lg border-solid border-neutral-200 max-md:pr-5">
                <img
                  alt="img"
                  loading="lazy"
                  src="https://www.shutterstock.com/shutterstock/photos/2275269793/display_1500/stock-vector-google-popular-realistic-social-media-logotype-editorial-illustration-eps-2275269793.jpg"
                  className="aspect-square object-contain object-center w-8 h-8 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-zinc-600 text-xs leading-6 my-auto">
                  Sign up with Google
                </div>
              </span>
              <span className="border flex items-stretch justify-between gap-3 px-3 py-2 ml-4 rounded-lg border-solid border-neutral-200 max-md:pr-5">
                <img
                  alt="img"
                  loading="lazy"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFlI_3rHTSCdcenWLKRHAl5e1G7DEI1TYSLpJthkxgaQ&s"
                  className="aspect-square object-contain object-center w-8 h-8 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-zinc-600 text-xs leading-6 mt-1.5">
                  Sign up with Facebook
                </div>
              </span>
            </div>
            <div className="text-slate-600 text-lg leading-6 self-center whitespace-nowrap my-4">
              OR
            </div>
            <form onSubmit={loginUser} className="flex flex-col items-center w-full">
              <input
                type="email"
                name="email"
                value={form.email}
                placeholder="Email Address"
                onChange={handleInputs}
                style={{ outline: 'none' }}
                className="mb-4 p-3 border border-gray-300 rounded w-full"
              />
              <input
                type="password"
                name="password"
                value={form.password}
                placeholder="Password"
                onChange={handleInputs}
                style={{ outline: 'none' }}
                className="mb-4 p-3 border border-gray-300 rounded w-full"
              />
              <div className="text-slate-600 text-base leading-6 mb-4">
                No account?{' '}
                <Link to={'/signup'} className="text-slate-600">
                  Sign up
                </Link>
              </div>
              <button className="text-white bg-slate-600 p-3 rounded w-full" type="submit">
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
