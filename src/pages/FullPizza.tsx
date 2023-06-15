import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { IPizza } from '../redux/pizza/types';
import { BASE_URL } from '../utils/const';
import PizzaBlock from '../components/PizzaBlock';

const FullPizza = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pizza, setPizza] = useState<IPizza>({} as IPizza);
  const isMounted = useRef<boolean>(false);

  const getPizzaById = async (id: string) => {
    try {
      const { data } = await axios.get(BASE_URL + `/${id}`);
      setPizza(data);
    } catch (error) {
      alert('Ошибка при получении пиццы');
      navigate('/');
    }
  };

  // Если был первый рендер, то запрашиваем пиццы
  useEffect(() => {
    if (!isMounted.current) {
      getPizzaById(id as string);
    }

    isMounted.current = true;
  }, [id]);

  if (!pizza?.id) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="content__full-pizza">
      <PizzaBlock key={pizza.id} {...pizza} />
    </div>
  );
};

export default FullPizza;
