import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react"; 

const predefinedReplies = {
  "how do i sell my license": "Just upload your license on our platform, and you’ll receive an instant valuation.",
  "how long does it take to get paid": "Payments are processed within 24 hours after license approval.",
  "is it safe": "Yes! We use secure transaction systems to protect your data and payments.",
  "hi" : "hello from SoftSell"
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const lower = input.trim().toLowerCase();
    const botReply =
      predefinedReplies[lower] || "Sorry, I’m still learning to answer that.";

    setMessages([...messages, { from: "user", text: input }, { from: "bot", text: botReply }]);
    setInput("");
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
        >
          <MessageSquare size={24} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="w-80 h-96 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl p-4 mt-4 flex flex-col"
            >
              <h3 className="text-lg font-semibold mb-2 text-center text-gray-800 dark:text-white">
                Ask SoftBot 🤖
              </h3>
              <div className="flex-1 overflow-y-auto space-y-2 mb-2">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`p-2 rounded-md max-w-[90%] ${
                      msg.from === "user"
                        ? "bg-blue-100 self-end text-right"
                        : "bg-gray-100 self-start dark:bg-gray-700 text-gray-800 dark:text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask something..."
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm dark:bg-gray-800 dark:text-white"
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button
                  onClick={sendMessage}
                  className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-700"
                >
                  Send
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
