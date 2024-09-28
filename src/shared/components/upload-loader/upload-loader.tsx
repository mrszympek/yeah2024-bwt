import { useEffect, useState } from 'react';

export const UploadLoader = () => {
  const totalCircles = 20;
  const [coloredIndex, setColoredIndex] = useState(-1); // Początkowo żadna kropka nie jest kolorowa

  useEffect(() => {
    const interval = setInterval(() => {
      setColoredIndex((prevIndex) => {
        if (prevIndex === totalCircles - 1) {
          return -1;
        }
        return prevIndex + 1;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [totalCircles]);

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {Array.from({ length: totalCircles }).map((_, index) => (
        <div
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor:
              index <= coloredIndex && coloredIndex !== -1
                ? 'red'
                : 'lightgray',
            transition: 'background-color 0.3s ease',
          }}
          key={index}
        />
      ))}
    </div>
  );
};
