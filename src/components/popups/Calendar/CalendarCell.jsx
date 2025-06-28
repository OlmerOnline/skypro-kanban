import { format, getDaysInMonth } from "date-fns";
import { useContext } from "react";
import styled from "styled-components";
import { TasksContext } from "../../../context/TasksContext";

export const Cell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: ${({ $isClick }) => ($isClick ? "#FFFFFF" : "#94a6be")};
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
  opacity: ${({ $isOpacity }) => $isOpacity && "0"};
  font-weight: ${({ $isCurrentDate }) => ($isCurrentDate ? 700 : 400)};
  background: ${({ $isClick }) => $isClick && "#94A6BE"};

  &:hover {
    background: ${({ $isClick }) => !$isClick && "#eaeef6"};
  }
`;
Cell.displayName = "Cell";

function CalendarCell({ month, year, selectedDate, setSelectedDate }) {
  let { setCalendarSelectedDate } = useContext(TasksContext);
  const currentDate = new Date();
  const numberOfDays = getDaysInMonth(new Date(year, month));
  const indexFirstDay = new Date(year, month, 1).getDay();
  const indexLastDay = new Date(year, month, numberOfDays).getDay();

  const start = indexFirstDay === 0 ? 6 : indexFirstDay - 1;
  const end = indexLastDay === 0 ? 0 : 7 - indexLastDay;
  const lenght = numberOfDays + start + end;

  let cells = [];
  for (let i = 1; i <= lenght; i++) {
    if (i <= start) {
      cells.push(0);
    } else {
      i <= numberOfDays + start ? cells.push(i - start) : cells.push(0);
    }
  }

  function handleDeadline(event) {
    setCalendarSelectedDate(new Date(year, month, event.target.textContent));
    setSelectedDate(new Date(year, month, event.target.textContent));
  }

  const components = cells.map((cell, index) => (
    <Cell
      key={index}
      $isOpacity={!cell}
      $isCurrentDate={
        format(currentDate, "dd.MM.yy") ===
        format(new Date(year, month, cell), "dd.MM.yy")
      }
      $isClick={
        format(selectedDate, "dd.MM.yy") ===
        format(new Date(year, month, cell), "dd.MM.yy")
      }
      onClick={handleDeadline}
    >
      {cell}
    </Cell>
  ));

  return components;
}

export default CalendarCell;
