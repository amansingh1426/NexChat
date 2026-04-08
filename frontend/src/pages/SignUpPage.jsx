import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { LoaderIcon } from "lucide-react";
import AuthEditorialShell from "../components/AuthEditorialShell";

function SignUpPage() {
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
  const { signup, isSigningUp } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
  };

  const inputClassName =
    "w-full rounded-xl border border-[#c2c6d8]/20 bg-[#f2f4f6] px-4 py-3.5 text-[#191c1e] placeholder:text-[#8a90a0] outline-none transition-all focus:border-[#0050cb] focus:ring-2 focus:ring-[#0050cb]/20";

  return (
    <AuthEditorialShell
      title="Create your account"
      subtitle="Set up your secure workspace and start collaborating in minutes."
      helperText="Already have an account?"
      helperLinkText="Sign in instead"
      helperLinkTo="/login"
      mode="signup"
      form={
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#191c1e]" htmlFor="fullName">
              Full Name
            </label>
            <input
              className={inputClassName}
              id="fullName"
              placeholder="John Doe"
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#191c1e]" htmlFor="email">
              Email
            </label>
            <input
              className={inputClassName}
              id="email"
              placeholder="name@example.com"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#191c1e]" htmlFor="password">
              Password
            </label>
            <input
              className={inputClassName}
              id="password"
              placeholder="••••••••"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <button
            className="mt-2 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#0050cb] to-[#0066ff] px-4 py-3.5 text-base font-bold text-white shadow-[0_12px_32px_rgba(0,80,203,0.20)] transition-opacity hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isSigningUp}
            type="submit"
          >
            {isSigningUp ? <LoaderIcon className="h-5 w-5 animate-spin" /> : "Sign Up"}
          </button>
        </form>
      }
    />
  );
}
export default SignUpPage;
