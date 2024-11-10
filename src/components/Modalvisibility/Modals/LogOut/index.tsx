import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // LocalStorage'dan ma'lumotni o'chirish
    localStorage.removeItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxNCwic3VybmFtZSI6bnVsbCwibmFtZSI6bnVsbC');

    // React Router orqali login sahifasiga yo'naltirish
    navigate('/');
  };

  return (
    <button onClick={handleLogout}>Chiqish</button>
  );
};

export default LogoutButton;
