import styled from "styled-components";

export const SCalendar = styled.div`
  width: 182px;
  margin-bottom: 20px;
`;
SCalendar.displayName = "SCalendar";

export const Title = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const Navigation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`;

export const Month = styled.div`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

export const NavigationActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Action = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

export const Name = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
`;

export const CalendarCells = styled.div`
  width: 182px;
  display: flex;
  flex-wrap: wrap;
`;

export const PeriodText = styled.p`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
`;
PeriodText.displayName = "PeriodText";
