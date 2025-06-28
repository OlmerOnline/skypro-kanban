import { useNavigate, useParams } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import {
  Block,
  BlockCategoriesBot,
  BtnBlue,
  BtnWhite,
  ButtonsBlock,
  CategoriesBotTitle,
  CategoriesTheme,
  Container,
  Content,
  Form,
  FormArea,
  FormBlock,
  FormTitle,
  Header,
  SPopTask,
  Status,
  StatusTheme,
  StatusThemes,
  StatusThemeText,
  StatusTitle,
  ThemeText,
  Title,
  Wrap,
} from "./PopTask.styled";
import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../../../context/TasksContext";
import { fetchDeleteTask, fetchEditTask } from "../../../services/api";
import { AuthContext } from "../../../context/AuthContext";

function PopTask({ isShow }) {
  window.scrollTo(0, 0);

  const { tasks, setTasks, calendarSelectedDate, setCalendarSelectedDate } =
    useContext(TasksContext);
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate("");

  const [isGroupEditBtn, setIsGroupEditBtn] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [isHideStatus, setIsHideStatus] = useState(true);
  const [isActiveCalendar, setIsActiveCalendar] = useState(false);
  const [isCancel, setIsCancel] = useState(false);

  const task = tasks.find((task) => task._id === id);
  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const [taskDescription, setTaskDescription] = useState(task?.description);
  const [taskStatus, setTaskStatus] = useState(task?.status);
  const [taskDate, setTaskDate] = useState(
    calendarSelectedDate ? calendarSelectedDate : task?.date
  );

  useEffect(() => {
    if (calendarSelectedDate) {
      setTaskDate(calendarSelectedDate);
    }
  }, [calendarSelectedDate]);

  function handleClose() {
    setIsCancel(true);
    navigate("/");
  }

  async function handleDelete(event) {
    event.preventDefault();

    try {
      const data = await fetchDeleteTask(user.token, id);

      if (data) {
        setTasks(data);
        navigate("/");
      }
    } catch (error) {
      throw error.message;
    }
  }

  function handleEdit() {
    setIsGroupEditBtn(true);
    setIsReadOnly(false);
    setIsHideStatus(false);
    setIsActiveCalendar(true);
    setIsCancel(false);
  }

  function handleCancel() {
    setIsGroupEditBtn(false);
    setIsReadOnly(true);
    setIsHideStatus(true);
    setIsActiveCalendar(false);
    setIsCancel(true);

    setTaskDescription(task.description);
    setTaskStatus(task.status);
    setTaskDate(task.date);

    setCalendarSelectedDate(null);
  }

  async function handleSave() {
    try {
      const data = await fetchEditTask(user.token, {
        ...task,
        description: taskDescription,
        status: taskStatus,
        date: taskDate,
      });

      if (data) {
        setTasks(data);
        navigate("/");
      }
    } catch (error) {
      throw error.message;
    }
  }

  function handleStatus(event) {
    setTaskStatus(event.currentTarget.querySelector("p").textContent);
  }

  function handleChange(event) {
    setTaskDescription(event.target.value);
  }

  const components = statuses.map((status, index) => (
    <StatusTheme
      key={index}
      $isHide={taskStatus === status ? false : isHideStatus}
      $isActive={taskStatus === status}
      onClick={handleStatus}
    >
      <StatusThemeText>{status}</StatusThemeText>{" "}
    </StatusTheme>
  ));

  return (
    <SPopTask id="popBrowse" $isShow={isShow}>
      <Container>
        <Block>
          <Content>
            <Header>
              <Title>{task?.title}</Title>
              <CategoriesTheme $isTop={true} $color={task?.topic}>
                <ThemeText $color={task?.topic}>{task?.topic}</ThemeText>
              </CategoriesTheme>
            </Header>

            <Status>
              <StatusTitle>Статус</StatusTitle>
              <StatusThemes>{components}</StatusThemes>
            </Status>

            <Wrap>
              <Form>
                <FormBlock>
                  <FormTitle htmlFor="textArea01">Описание задачи</FormTitle>
                  <FormArea
                    name="description"
                    placeholder="Введите описание задачи..."
                    value={taskDescription}
                    onChange={handleChange}
                    readOnly={isReadOnly}
                  />
                </FormBlock>
              </Form>
              <Calendar
                date={taskDate}
                isActive={isActiveCalendar}
                isCancel={isCancel}
              />
            </Wrap>

            <BlockCategoriesBot>
              <CategoriesBotTitle>Категория</CategoriesBotTitle>
              <CategoriesTheme $isTop={false} $color={task?.topic}>
                <ThemeText $color={task?.topic}>{task?.topic}</ThemeText>
              </CategoriesTheme>
            </BlockCategoriesBot>

            <ButtonsBlock $isShow={!isGroupEditBtn}>
              <div>
                <BtnWhite onClick={handleEdit}>Редактировать задачу</BtnWhite>
                <BtnWhite onClick={handleDelete}>Удалить задачу</BtnWhite>
              </div>
              <BtnBlue onClick={handleClose}>Закрыть</BtnBlue>
            </ButtonsBlock>

            <ButtonsBlock $isShow={isGroupEditBtn}>
              <div>
                <BtnBlue style={{ marginRight: "8px" }} onClick={handleSave}>
                  Сохранить
                </BtnBlue>
                <BtnWhite onClick={handleCancel}>Отменить</BtnWhite>
                <BtnWhite onClick={handleDelete}>Удалить задачу</BtnWhite>
              </div>
              <BtnBlue onClick={handleClose}>Закрыть</BtnBlue>
            </ButtonsBlock>
          </Content>
        </Block>
      </Container>
    </SPopTask>

    // <div className="pop-browse" id="popBrowse">
    //   <div className="pop-browse__container">
    //     <div className="pop-browse__block">
    //       <div className="pop-browse__content">
    //         <div className="pop-browse__top-block">
    //           <h3 className="pop-browse__ttl">Название задачи</h3>
    //           <div className="categories__theme theme-top _orange _active-category">
    //             <p className="_orange">Web Design</p>
    //           </div>
    //         </div>

    //         <div className="pop-browse__status status">
    //           <p className="status__p subttl">Статус</p>
    //           <div className="status__themes">
    //             <div className="status__theme _hide">
    //               <p>Без статуса</p>
    //             </div>
    //             <div className="status__theme _gray">
    //               <p className="_gray">Нужно сделать</p>
    //             </div>
    //             <div className="status__theme _hide">
    //               <p>В работе</p>
    //             </div>
    //             <div className="status__theme _hide">
    //               <p>Тестирование</p>
    //             </div>
    //             <div className="status__theme _hide">
    //               <p>Готово</p>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="pop-browse__wrap">
    //           <form
    //             className="pop-browse__form form-browse"
    //             id="formBrowseCard"
    //             action="#"
    //           >
    //             <div className="form-browse__block">
    //               <label htmlFor="textArea01" className="subttl">
    //                 Описание задачи
    //               </label>
    //               <textarea
    //                 className="form-browse__area"
    //                 name="text"
    //                 id="textArea01"
    //                 readOnly
    //                 placeholder="Введите описание задачи..."
    //               ></textarea>
    //             </div>
    //           </form>
    //           <Calendar />
    //         </div>

    //         <div className="theme-down__categories theme-down">
    //           <p className="categories__p subttl">Категория</p>
    //           <div className="categories__theme _orange _active-category">
    //             <p className="_orange">Web Design</p>
    //           </div>
    //         </div>

    //         <div className="pop-browse__btn-browse ">
    //           <div className="btn-group">
    //             <button className="btn-browse__edit _btn-bor _hover03">
    //               <a href="#">Редактировать задачу</a>
    //             </button>
    //             <button className="btn-browse__delete _btn-bor _hover03">
    //               <a href="#">Удалить задачу</a>
    //             </button>
    //           </div>
    //           <button className="btn-browse__close _btn-bg _hover01">
    //             <a href="#">Закрыть</a>
    //           </button>
    //         </div>

    //         <div className="pop-browse__btn-edit _hide">
    //           <div className="btn-group">
    //             <button className="btn-edit__edit _btn-bg _hover01">
    //               <a href="#">Сохранить</a>
    //             </button>
    //             <button className="btn-edit__edit _btn-bor _hover03">
    //               <a href="#">Отменить</a>
    //             </button>
    //             <button
    //               className="btn-edit__delete _btn-bor _hover03"
    //               id="btnDelete"
    //             >
    //               <a href="#">Удалить задачу</a>
    //             </button>
    //           </div>
    //           <button className="btn-edit__close _btn-bg _hover01">
    //             <a href="#">Закрыть</a>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default PopTask;
