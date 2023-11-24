import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  format,
  eachDayOfInterval,
  eachMonthOfInterval,
  startOfWeek,
  startOfMonth,
  startOfYear,
} from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR';
import { Bar } from 'react-chartjs-2';
import { FaSquare } from "react-icons/fa";
// import filesize from 'filesize';
// import Modal from '@components/Modal';
// import Button from '@components/Button';
// import Upload from '@components/Upload';
// import FileList from '@components/FileList';

import options from './options';

import { Actions, ActionButton, ExportButton, AreaGrafichs } from './styles';

interface IAvailable {
  id: number;
  name: string;
}

interface IBarProps {
  categories: {
    name: string;
    color: string;
  }[];

  labelname: string;
  request: {
    [key: number]: {
      [key: string]: number[];
    };
  };
}

interface IFileProps {
  file: File;
  name: string;
  readableSize: string;
}

interface IData {
  id: number;
  color: string;
}

const available: IAvailable[] = [
  {
    id: 2,
    name: 'Anual',
  },
];

const BarChart: React.FC<IBarProps> = ({ labelname, request, categories }) => {
  const [selectedType, setSelectedType] = useState<IAvailable>({
    id: 2,
    name: 'Anual',
  });
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    const datasets = categories.map(({ name, color }) => {
      const response = request[selectedType.id];

      const findCategory = response[name];

      const dataset = {
        id: selectedType.id,
        color,
        label: name,
        data: findCategory,
      };

      Object.assign(dataset, {
        backgroundColor: color,
        borderColor: 'rgba(0, 0, 0, 0.8)',
        barThickness: categories.length > 2 ? 5 : 10,
      });

      return dataset;
    });

    setData(datasets);
  }, [labelname, request, categories, selectedType]);

  const calculedDays = useMemo(() => {
    if (selectedType.id === 0) {
      const parsedDays = eachDayOfInterval({
        start: startOfMonth(new Date()),
        end: new Date(),
      });

      return parsedDays.map(date => format(date, 'dd/MM'));
    }

    if (selectedType.id === 1) {
      const parsedDays = eachDayOfInterval({
        start: startOfWeek(new Date()),
        end: new Date(),
      });

      const formatted = parsedDays.map(date =>
        format(date, 'EEEE', {
          locale: ptBR,
        }),
      );

      return formatted.map(
        date => date.charAt(0).toUpperCase() + date.slice(1),
      );
    }

    if (selectedType.id === 2) {
      const parsedDays = eachMonthOfInterval({
        start: startOfYear(new Date()),
        end: new Date(),
      });

      const formatted = parsedDays.map(date =>
        format(date, 'MMMM', {
          locale: ptBR,
        }),
      );

      return formatted.map(
        date => date.charAt(0).toUpperCase() + date.slice(1),
      );
    }

    return [];
  }, [selectedType]);


  return (
    <>
      <AreaGrafichs>
        <Actions>
          <h4>Gráfico de receitas</h4>
        </Actions>
        <Bar
          data={{
              labels: calculedDays,
              datasets: data.filter(dataset => dataset.id === selectedType.id),
            }}
            options={options}
            />
      </AreaGrafichs>
    </>
  );
};

export default BarChart;
