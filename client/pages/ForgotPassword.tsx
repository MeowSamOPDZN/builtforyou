import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      console.log("Password reset requested for:", email);
    }, 1500);
  };

  const handleResend = async () => {
    setIsLoading(true);

    // Simulate resend API call
    setTimeout(() => {
      setIsLoading(false);
      console.log("Password reset resent for:", email);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-purple-start/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-purple-end/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <h1 className="text-3xl font-bold bg-brand-gradient bg-clip-text text-transparent mb-2">
                BuiltForYou
              </h1>
            </Link>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Check your email
            </h2>
            <p className="text-gray-600">
              We've sent password reset instructions to your email
            </p>
          </div>

          {/* Success Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            {/* Success Icon */}
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-green-600" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Email sent successfully
            </h3>

            <p className="text-gray-600 mb-2">
              We've sent a password reset link to:
            </p>

            <p className="font-semibold text-gray-900 mb-6 break-all">
              {email}
            </p>

            <div className="space-y-4">
              <p className="text-sm text-gray-500">
                Didn't receive the email? Check your spam folder or request a
                new link.
              </p>

              {/* Resend Button */}
              <Button
                onClick={handleResend}
                disabled={isLoading}
                variant="outline"
                className="w-full border-2 border-brand-800 text-brand-800 hover:bg-brand-800 hover:text-white py-3 rounded-xl font-semibold transition-all duration-200"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-2"></div>
                    Resending...
                  </div>
                ) : (
                  "Resend email"
                )}
              </Button>

              {/* Back to Login */}
              <Link to="/login">
                <Button className="w-full bg-brand-gradient text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Sign In
                </Button>
              </Link>
            </div>

            {/* Additional Help */}
            <div className="mt-8 p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600">
                Still having trouble?{" "}
                <button
                  type="button"
                  className="text-brand-600 hover:text-brand-800 font-medium transition-colors"
                >
                  Contact support
                </button>
              </p>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-purple-start/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-purple-end/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-bold bg-brand-gradient bg-clip-text text-transparent mb-2">
              BuiltForYou
            </h1>
          </Link>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Reset your password
          </h2>
          <p className="text-gray-600">
            Enter your email and we'll send you a reset link
          </p>
        </div>

        {/* Reset Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors ${
                    error ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your email address"
                  disabled={isLoading}
                />
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-brand-gradient text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending reset link...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  Send Reset Link
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              )}
            </Button>

            {/* Help Text */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Remember your password?{" "}
                <Link
                  to="/login"
                  className="text-brand-600 hover:text-brand-800 font-medium transition-colors"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </form>

          {/* Security Note */}
          <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-blue-400 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-semibold text-blue-800 mb-1">
                  Security Notice
                </h4>
                <p className="text-sm text-blue-700">
                  For your security, password reset links expire after 1 hour
                  and can only be used once.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
