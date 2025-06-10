import { motion } from 'framer-motion';
import Logo from '../components/Logo';
import { ShieldCheckIcon, LightBulbIcon, BookOpenIcon, SparklesIcon } from '@heroicons/react/24/outline';

const LearnPage = () => {
  const topics = [
    {
      title: 'What is Smart Contract Auditing?',
      content: 'Smart contract auditing is the process of reviewing and analyzing smart contract code to identify security vulnerabilities, bugs, and potential risks. It helps ensure that your smart contracts are secure and function as intended.',
      icon: <ShieldCheckIcon className="h-8 w-8 text-blue-500" />
    },
    {
      title: 'Common Vulnerabilities',
      content: 'Learn about common smart contract vulnerabilities such as reentrancy attacks, integer overflow, access control issues, and more. Understanding these risks is crucial for developing secure smart contracts.',
      icon: <SparklesIcon className="h-8 w-8 text-indigo-500" />
    },
    {
      title: 'Best Practices',
      content: 'Discover industry best practices for smart contract development, including code organization, testing strategies, and security patterns that help prevent common vulnerabilities.',
      icon: <BookOpenIcon className="h-8 w-8 text-cyan-500" />
    },
    {
      title: 'Audit Process',
      content: 'Understand the complete audit process, from code review to vulnerability assessment and report generation. Learn how professional auditors approach smart contract security.',
      icon: <LightBulbIcon className="h-8 w-8 text-yellow-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-12 flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12 flex flex-col items-center"
        >
          <Logo className="mx-auto mb-4 h-16 w-16" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Learn About Smart Contract Security
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Comprehensive resources to help you understand and improve your smart contract security
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 border border-white/30 dark:border-gray-700/40 rounded-3xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-all"
            >
              <div className="mb-4">{topic.icon}</div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{topic.title}</h2>
              <p className="text-muted text-center">{topic.content}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">Ready to Audit Your Smart Contract?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Use our AI-powered audit tool to analyze your smart contracts for vulnerabilities
          </p>
          <a
            href="/audit"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full shadow-xl text-lg font-bold transition-all duration-200 hover:from-blue-600 hover:to-cyan-500 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800"
          >
            Start Your Audit
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default LearnPage; 