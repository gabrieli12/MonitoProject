import { useState } from "react";
import Lang from "../../data/lang/Lang";
import Button from "../simpleComponents/Button";
import Nav from "./Nav";
import { useLang } from "../LangProvider";
import dog from '../../assets/images/image 2 (4).png';
import title from '../../assets/images/title.png';
import exitBurger from '../../assets/icons/exitBurger.png';
import arrow from '../../assets/icons/Caret_Left_SM.png';
import icon from '../../assets/icons/Frame (6).png';
import check from '../../assets/icons/check.png'



function ChatMonito() {
  const { chatIsOpen, setChatIsOpen } = useLang();
  
  const chatHandleClick = () => {
    setChatIsOpen(true);
  };

  const exitChat = () => {
    setChatIsOpen(false);
  };

  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  const [input, setInput] = useState('');

  const randomResponses = [
    "Effortlessly create modern Web Apps with Blaze 🔥 Feature-rich, Flexible, and Clean HTML Dashboard Template.",
    "Craft seamless user experiences using Flash ⚡ Lightning-fast, Scalable, and Highly Configurable Web App Template.",
    "Boost your productivity with Zenith 🚀 Intuitive, Modular, and Designed for Developers' ease-of-use Dashboard Template.",
    "Deliver top-notch Web Apps swiftly with Nova 🌟 Fully Responsive, Customizable, and Tailored Admin Dashboard Template.",
    "Design powerful Web Apps using Orbit 🌐 Sleek, Professional, and Optimized HTML Admin Template."
  ];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { 
      text: input, 
      type: 'user', 
      time: new Date().toLocaleTimeString() 
    };

    const botMessage = { 
      text: randomResponses[Math.floor(Math.random() * randomResponses.length)], 
      type: 'bot', 
      time: new Date().toLocaleTimeString() 
    };

    const newMessages = [...messages, userMessage, botMessage];
    
    // Save to local storage
    localStorage.setItem('chatMessages', JSON.stringify(newMessages));
    
    // Update the state
    setMessages(newMessages);
    setInput('');
  };

  const handleButtonClick = (message) => {
    const userMessage = { 
      text: message, 
      type: 'user', 
      time: new Date().toLocaleTimeString() 
    };

    const botMessage = { 
      text: randomResponses[Math.floor(Math.random() * randomResponses.length)], 
      type: 'bot', 
      time: new Date().toLocaleTimeString() 
    };

    const newMessages = [...messages, userMessage, botMessage];
    
    // Save to local storage
    localStorage.setItem('chatMessages', JSON.stringify(newMessages));

    // Update the state
    setMessages(newMessages);
  };

  return (
    <section className={`fixed top-0 left-0 w-full h-full bg-[#12121299] z-50 justify-center items-center ${chatIsOpen ? 'flex' : 'hidden'} p-10 max-sm:p-0 `}>
      <div className="max-w-[424px]  bg-white flex flex-col justify-center items-center rounded-xl relative h-full w-full overflow-x-auto max-sm:rounded-none">
        <img className="relative object-cover" src={dog} alt="dog photo" />
        <img onClick={exitChat} className="absolute left-3 top-7 cursor-pointer" src={arrow} alt="exit navigation menu" />
        <img onClick={exitChat} className="absolute right-5 top-12 cursor-pointer" src={icon} alt="exit navigation menu" />

        <div className="flex flex-col justify-center items-center w-full">
          <div className="h-96 overflow-auto bg-gray-200 p-8 py-16 rounded-lg bg-[#F8F9FA] w-full flex flex-col gap-5">
            {messages.map((msg, index) => (
              <div key={index} className={`relative message mb-4 flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`} >
                <div className={`relative message-bubble p-3 ${msg.type === 'user' ? 'bg-[#F7DBA7] text-[#444444] rounded-l-lg rounded-tr-lg' : 'bg-darkBlue text-white rounded-r-lg rounded-tl-lg'} max-w-xs`}>
                  <div className="font-inter font-normal text-[15px]">{msg.text}</div>
                  {msg.type === 'user' ? 

                  <div>
                    <div className="absolute -bottom-5 right-0 w-0 h-0 border-t-[20px] border-t-[#f9dca7] border-r-[20px] border-transparent rotate-90 "></div>
                    <div className="absolute left-0 -bottom-5 text-[10px] font-inter mt-1 text-[#888888] flex  gap-2 justify-center items-center ">{msg.time.slice(0, -2)}
                      <img src={check} alt="check icon" />
                    </div>
                  </div>



                  :

                  ''
                  
                }
                </div>
                {
                msg.type === 'bot' ? 

                <div className="flex absolute -bottom-[52px] -left-4 gap-2 ">
                  <img className="w-12 h-12 rounded-full bg-darkBlue p-2" src={dog} alt="" />
                  <div className="text-[10px] font-inter mt-1 text-[#888888]">{msg.time}</div>
                </div>


                :
                  ''
                }
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-4 w-full flex flex-col gap-2">
            <div className="flex w-full items-center gap-2">
              <button  type="button"  onClick={() => handleButtonClick('🤔 What is WappGPT?')}  className="bg-[#F3F5F6] rounded-[8.27px] py-[4.96px] px-[13.22px] text-[#444444] font-inter font-semibold text-[9.92px] w-2/3" >🤔 What is WappGPT?</button>
              <button  type="button"  onClick={() => handleButtonClick('💰 Pricing')}  className="bg-[#F3F5F6] rounded-[8.27px] py-[4.96px] px-[13.22px] text-[#444444] font-inter font-semibold text-[9.92px] w-[90px]" >💰 Pricing </button>
              <button type="button" onClick={() => handleButtonClick('🙋‍♂️ FAQs')} className="bg-[#F3F5F6] rounded-[8.27px] py-[4.96px] px-[13.22px] text-[#444444] font-inter font-semibold text-[9.92px] w-[90px]">🙋‍♂️ FAQs</button>
            </div>

            <input  type="text"  value={input}  placeholder="Type your message here..."  className="rounded-[13.23px] py-[16.53px] px-[18.19px] bg-[#E8EBF0] border-[0.83px] border-[#F3F5F6] w-full font-inter font-normal text-[#444444] text-sm" onChange={(e) => setInput(e.target.value)} />
          </form>
        </div>
      </div>
    </section>
  );
}

export default ChatMonito;
