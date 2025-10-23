import { use } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../context/AuthContext";

const ForgetPassword = () => {
  const { resetPassword } = use(AuthContext);
  const location = useLocation();
  const email = location.state?.email || "";

  const handleResetPassword = (e) => {
    e.preventDefault();
    resetPassword(email)
      .then(() => {
        window.open("https://mail.google.com/", "_blank");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleResetPassword}
        className="bg-white/10 backdrop-blur-2xl p-8 rounded-3xl w-full max-w-md"
      >
        <h2 className="text-2xl text-white font-bold mb-6 text-center">
          Reset Password
        </h2>

        <label className="text-white mb-2 block">Email</label>
        <input
          type="email"
          defaultValue={email}
          placeholder="you@example.com"
          required
          className="w-full px-4 py-2 rounded-lg bg-white/20 text-white outline-none mb-4"
        />

        <button
          type="submit"
          className="w-full py-2 bg-teal-400 rounded-lg text-white font-semibold hover:opacity-90 transition"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
