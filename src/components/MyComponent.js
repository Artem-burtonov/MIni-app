import React, { useState, useEffect } from 'react';
import DayDescription from './DayDescription'; // Assuming DayDescription component is in a separate file


const descriptions = [
  "Сегодня — это новый шанс, чтобы создать свой собственный мир, наполненный позитивом и гармонией. Пусть ваши действия будут продиктованы добротой и стремлением к самосовершенствованию. Не сравнивайте себя с другими, а сосредоточьтесь на своем уникальном пути.",
  "Сегодня — день для поиска баланса между деятельностью и отдыхом. Найдите время для того, что делает вас счастливыми, и не забывайте о важности планирования и достижения целей. Пусть доброта и позитивное мышление станут вашими спутниками на протяжении всего дня."
];

const getRandomDescription = () => {
    if (!descriptions || descriptions.length === 0) {
        return "Нет доступных описаний.";
    }
    const randomIndex = Math.floor(Math.random() * descriptions.length);
    return descriptions[randomIndex];
};

const MyComponent = () => {
  const [description, setDescription] = useState('');

  useEffect(() => {
    setDescription(getRandomDescription());
  }, []); // Запускается только один раз при монтировании компонента


  return (
    <div>
      <DayDescription description={description} />
    </div>
  );
};

export default MyComponent;