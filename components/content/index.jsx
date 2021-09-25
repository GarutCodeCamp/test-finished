import style from '../../styles/Content.module.css';
const Content = ({children}) => (
    <div className=" pt-5 mt-4 ">
        <div className="container-fluid">
            <div className={style.paper}>
                {children}
            </div>
        </div>
    </div>
)

export default Content