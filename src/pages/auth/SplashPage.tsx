import { useEffect, useState } from "react";
import logo from "../../assets/clinikpe.svg";
import { useNavigate } from "react-router-dom";
const SplashPage = () => {
  const [fadeOut, setFadeOut] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    // Start fade out animation
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Navigate after fade completes
    const navigateTimer = setTimeout(() => {
      navigate("/login", { replace: true });
      console.log("Would navigate to login page");
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(navigateTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Main content */}
      <div
        className={`relative z-10 flex flex-col items-center transition-all duration-500 ${
          fadeOut ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        {/* Logo container with glow effect */}
        <div className="relative mb-8">
          {/* Glow rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-ping"></div>
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-ping"></div>
          </div>

          {/* Logo */}
          <img
            src={logo}
            alt="ClinikPe Logo"
            className="w-auto object-cover h-20"
          />
        </div>

        {/* App name */}
        {/* <h1 className="text-4xl font-bold text-[#0D52AF] mb-3 tracking-tight animate-fade-in">
          ClinikPe
        </h1> */}

        {/* Tagline */}
        {/* <p className="text-gray-600 text-sm font-medium animate-fade-in-delay">
          Healthcare Made Simple
        </p> */}

        {/* Loading indicator */}
        <div className="mt-12 flex space-x-2 animate-fade-in-delay-2">
          <div
            className="w-2 h-2 bg-[#0D52AF] rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="w-2 h-2 bg-[#0D52AF] rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-2 h-2 bg-[#0D52AF] rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>

      {/* Bottom branding */}
      <div
        className={`absolute bottom-8 text-center transition-opacity duration-500 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* <p className="text-gray-500 text-xs font-medium">
          Powered by Vxplore technologies
        </p> */}
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default SplashPage;
