import { useContext, useEffect, useState } from "react";
import Calendar from "../Calendar/Calendar.jsx";
import {
  Block,
  Categories,
  CategoriesThemes,
  CategoriesTitle,
  CloseBtn,
  Container,
  Content,
  CreateNewTaskBtn,
  Form,
  FormArea,
  FormBlock,
  FormInput,
  FormTitle,
  SPopNewTask,
  Theme,
  ThemeText,
  Title,
  Wrap,
} from "./PopNewTask.styled.js";
import { TasksContext } from "../../../context/TasksContext.jsx";
import { fetchAddTask } from "../../../services/api.js";
import { AuthContext } from "../../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const VALIDATION_FIELDS = {
  title: false,
  description: false,
  theme: false,
  date: false,
};

function PopNewTask({ isShow }) {
  const { user } = useContext(AuthContext);
  const { setTasks, calendarSelectedDate } = useContext(TasksContext);
  const navigate = useNavigate("");

  const [theme, setTheme] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    theme: "",
    date: "",
  });
  const [error, setError] = useState(VALIDATION_FIELDS);
  const [textError, setTextError] = useState("");

  useEffect(() => {
    setFormData({ ...formData, theme: theme });
    setError({ ...error, theme: false });
    setTextError("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  useEffect(() => {
    setFormData({ ...formData, date: calendarSelectedDate });
    setError({ ...error, date: false });
    setTextError("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calendarSelectedDate]);

  function validate() {
    const newError = VALIDATION_FIELDS;

    if (!theme) {
      newError.theme = true;
      setTextError("Выберите категорию задачи");
    }
    if (!calendarSelectedDate) {
      newError.date = true;
      setTextError("Выберите дату");
    }
    if (!formData.description.trim()) {
      newError.description = true;
      setTextError("Введите описание задачи");
    }
    if (!formData.title.trim()) {
      newError.title = true;
      setTextError("Введите название задачи");
    }

    setError(newError);
    return !Object.values(error).filter(Boolean).length;
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: false });
    setTextError("");
  }

  function handleTheme(event) {
    if (!theme) {
      setTheme(event.currentTarget.querySelector("p").textContent);
    } else {
      theme === event.currentTarget.querySelector("p").textContent
        ? setTheme("")
        : setTheme(event.currentTarget.querySelector("p").textContent);
    }
  }

  async function handleCreateTask(event) {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      const task = {
        title: formData.title,
        topic: formData.theme,
        status: "Без статуса",
        description: formData.description,
        date: formData.date,
      };
      console.log(task);
      console.log(user.token);
      const data = await fetchAddTask(user.token, task);

      if (data) {
        setTasks(data);
        navigate("/");
      }
    } catch (error) {
      throw error.message;
    }
  }

  return (
    <SPopNewTask id="popNewCard" $isShow={isShow}>
      <Container>
        <Block>
          <Content>
            <Title>Создание задачи</Title>
            <CloseBtn to="/">&#10006;</CloseBtn>

            <Wrap>
              <Form id="formNewTask">
                <FormBlock>
                  <FormTitle htmlFor="formTitle">Название задачи</FormTitle>
                  <FormInput
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    onChange={handleChange}
                    value={formData.title}
                    $error={error.title}
                  />
                </FormBlock>
                <FormBlock>
                  <FormTitle htmlFor="textArea">Описание задачи</FormTitle>
                  <FormArea
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    onChange={handleChange}
                    value={formData.description}
                    $error={error.description}
                  />
                </FormBlock>
              </Form>
              <Calendar />
            </Wrap>

            <Categories>
              <CategoriesTitle>Категория</CategoriesTitle>
              <CategoriesThemes>
                <Theme
                  $color="orange"
                  $isActive={theme === "Web Design"}
                  onClick={handleTheme}
                >
                  <ThemeText $color="orange">Web Design</ThemeText>
                </Theme>
                <Theme
                  $color="green"
                  $isActive={theme === "Research"}
                  onClick={handleTheme}
                >
                  <ThemeText $color="green">Research</ThemeText>
                </Theme>
                <Theme
                  $color="purple"
                  $isActive={theme === "Copywriting"}
                  onClick={handleTheme}
                >
                  <ThemeText $color="purple">Copywriting</ThemeText>
                </Theme>
              </CategoriesThemes>
            </Categories>

            <div style={{ color: "red" }}>{textError}</div>

            <CreateNewTaskBtn id="btnCreate" onClick={handleCreateTask}>
              Создать задачу
            </CreateNewTaskBtn>
          </Content>
        </Block>
      </Container>
    </SPopNewTask>

    // <div className="pop-new-card" id="popNewCard">
    //   <div className="pop-new-card__container">
    //     <div className="pop-new-card__block">
    //       <div className="pop-new-card__content">
    //         <h3 className="pop-new-card__ttl">Создание задачи</h3>
    //         <a href="#" className="pop-new-card__close">
    //           &#10006;
    //         </a>

    //         <div className="pop-new-card__wrap">
    //           <form
    //             className="pop-new-card__form form-new"
    //             id="formNewCard"
    //             action="#"
    //           >
    //             <div className="form-new__block">
    //               <label htmlFor="formTitle" className="subttl">
    //                 Название задачи
    //               </label>
    //               <input
    //                 className="form-new__input"
    //                 type="text"
    //                 name="name"
    //                 id="formTitle"
    //                 placeholder="Введите название задачи..."
    //                 autoFocus
    //               />
    //             </div>

    //             <div className="form-new__block">
    //               <label htmlFor="textArea" className="subttl">
    //                 Описание задачи
    //               </label>
    //               <textarea
    //                 className="form-new__area"
    //                 name="text"
    //                 id="textArea"
    //                 placeholder="Введите описание задачи..."
    //               ></textarea>
    //             </div>
    //           </form>
    //           <Calendar />
    //         </div>

    //         <div className="pop-new-card__categories categories">
    //           <p className="categories__p subttl">Категория</p>
    //           <div className="categories__themes">
    //             <div className="categories__theme _orange _active-category">
    //               <p className="_orange">Web Design</p>
    //             </div>
    //             <div className="categories__theme _green">
    //               <p className="_green">Research</p>
    //             </div>
    //             <div className="categories__theme _purple">
    //               <p className="_purple">Copywriting</p>
    //             </div>
    //           </div>
    //         </div>

    //         <button className="form-new__create _hover01" id="btnCreate">
    //           Создать задачу
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default PopNewTask;
