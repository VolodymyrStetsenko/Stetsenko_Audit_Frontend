import { useState } from 'react';
import { motion } from 'framer-motion';
import { UserCircleIcon, ArrowRightOnRectangleIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';

const AccountPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Mock audit history
  const auditHistory = [
    {
      id: '1',
      contractName: 'TokenContract.sol',
      date: '2024-03-15',
      status: 'Completed',
      vulnerabilities: 3
    },
    {
      id: '2',
      contractName: 'StakingContract.sol',
      date: '2024-03-10',
      status: 'Completed',
      vulnerabilities: 1
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoggedIn(true);
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-12 flex flex-col items-center">
        <div className="w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 border border-white/30 dark:border-gray-700/40 rounded-3xl shadow-xl p-8 flex flex-col items-center"
          >
            <UserCircleIcon className="h-14 w-14 text-blue-500 mb-4" />
            <h2 className="text-2xl font-bold text-center mb-8">{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
            <form onSubmit={isSignUp ? handleSignUp : handleLogin} className="space-y-6 w-full">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="input-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {isSignUp && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="input-field"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              )}
              {error && <div className="text-red-500 text-sm text-center">{error}</div>}
              <button type="submit" className="btn-primary w-full">
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </button>
            </form>
            <div className="mt-6 text-center">
              <button
                className="text-primary hover:underline text-sm"
                onClick={() => { setIsSignUp(!isSignUp); setError(''); }}
              >
                {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-12 flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <UserCircleIcon className="h-8 w-8 text-blue-500" /> My Account
            </h1>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="btn-secondary flex items-center gap-2"
            >
              <ArrowRightOnRectangleIcon className="h-5 w-5" /> Sign Out
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 border border-white/30 dark:border-gray-700/40 rounded-2xl shadow-xl p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><ClipboardDocumentListIcon className="h-6 w-6 text-indigo-500" />Audit History</h2>
                <div className="space-y-4">
                  {auditHistory.map((audit) => (
                    <div
                      key={audit.id}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white/80 dark:bg-gray-900/60"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">{audit.contractName}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {audit.date}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            {audit.status}
                          </span>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {audit.vulnerabilities} vulnerabilities found
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 border border-white/30 dark:border-gray-700/40 rounded-2xl shadow-xl p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><UserCircleIcon className="h-6 w-6 text-blue-500" />Account Details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                      Email
                    </label>
                    <p className="mt-1 text-gray-900 dark:text-white">
                      {email}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                      Subscription Plan
                    </label>
                    <p className="mt-1 text-gray-900 dark:text-white">
                      Free Trial
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AccountPage; 