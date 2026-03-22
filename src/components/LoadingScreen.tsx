import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SESSION_KEY = 'altera_loaded_v2';
const LOADER_LOGS = [
  'Initialisation du studio digital',
  'Optimisation des animations',
  'Préparation de votre expérience ALTÉRA',
];

export default function LoadingScreen() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem(SESSION_KEY) !== 'true';
  });

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem(SESSION_KEY, 'true');
    }, 2200);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0f0a]"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-3">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <polygon
                  points="20,2 36,11 36,29 20,38 4,29 4,11"
                  stroke="#1DB954"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M14 20 L18 24 L26 16"
                  stroke="#1DB954"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <span
                className="text-white font-black italic tracking-wide"
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: '2rem',
                  letterSpacing: '0.05em',
                }}
              >
                ALTÉRA
              </span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="text-white/40 text-sm tracking-[0.3em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Digital Studio
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.9, ease: 'easeOut' }}
              style={{ originX: 0 }}
              className="w-48 h-[2px] bg-gradient-to-r from-transparent via-[#1DB954] to-transparent mt-2"
            />

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="w-[min(88vw,560px)] rounded-xl border border-[#1DB954]/20 bg-black/20 px-4 py-3 backdrop-blur-sm"
            >
              {LOADER_LOGS.map((line, index) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + index * 0.2, duration: 0.3 }}
                  className="font-mono text-[11px] tracking-wide text-white/70"
                >
                  <span className="text-[#1DB954]">[0{index + 1}]</span> {line}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
