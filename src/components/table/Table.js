import React from 'react';

const Table = () => {
  return (
    <table style={{width: '100%', height: '200px'}}>
      <thead>
        <tr>
          <td>Тип документа</td>
          <td>Всего</td>
          <td>Проведен</td>
          <td>Ошибка</td>
          <td>Создан</td>
          <td>Отказано</td>
          <td>В обработке</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Платёжное поручение</td>
          <td>21</td>
          <td>12</td>
          <td>2</td>
          <td>4</td>
          <td>-</td>
          <td>3</td>
        </tr>
      </tbody>
    </table>
  )
};

export default Table;