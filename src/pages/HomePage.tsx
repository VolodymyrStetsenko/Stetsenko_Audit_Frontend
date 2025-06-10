import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { SparklesIcon, DocumentTextIcon, LifebuoyIcon } from '@heroicons/react/24/outline';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center relative">
        {/* Декоративний фон-коло */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-[-120px] w-[600px] h-[600px] bg-blue-100 dark:bg-blue-900/30 rounded-full blur-3xl opacity-40 z-0" />
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="mb-8 flex flex-col items-center">
            <Logo className="h-20 w-20" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight text-center drop-shadow-lg">
            AI-Powered Smart Contract Audits
          </h1>
          <p className="text-xl md:text-2xl text-muted mb-10 text-center max-w-2xl mx-auto">
            Secure your smart contracts with advanced AI analysis and professional audit reports.
          </p>
          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="mb-12"
          >
            <Link
              to="/audit"
              className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full shadow-xl text-lg font-bold transition-all duration-200 hover:from-blue-600 hover:to-cyan-500 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800"
            >
              Start Your Audit
            </Link>
          </motion.div>
          {/* Glass-картки */}
          <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 border border-white/30 dark:border-gray-700/40 rounded-3xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-all"
            >
              <SparklesIcon className="h-10 w-10 text-blue-500 mb-3" />
              <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">AI-Powered Analysis</h3>
              <p className="text-muted text-center">Advanced AI algorithms detect vulnerabilities and security risks in your smart contracts</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 border border-white/30 dark:border-gray-700/40 rounded-3xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-all"
            >
              <DocumentTextIcon className="h-10 w-10 text-indigo-500 mb-3" />
              <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Professional Reports</h3>
              <p className="text-muted text-center">Get detailed audit reports following industry standards with actionable recommendations</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 border border-white/30 dark:border-gray-700/40 rounded-3xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-all"
            >
              <LifebuoyIcon className="h-10 w-10 text-cyan-500 mb-3" />
              <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">24/7 Support</h3>
              <p className="text-muted text-center">Access to expert support and educational resources to improve your contract security</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage; 