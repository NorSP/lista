import React, {useState} from "react";


// create your first component
const Home = () => {

	const [tarea, setTarea] = useState("");
	const [listaTareas, setListaTareas] = useState([]);

    
	const handleSubmit  = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			setListaTareas([...listaTareas, tarea]);
			setTarea("");
			console.log(listaTareas);
		}
	};
	
    

// Loop through the elements, and hide the parent, when clicked on

const eliminarTarea = (i) => {
    const tareaFiltrada = listaTareas.filter((tarea, index) => {
        if (i !== index) {
            return tarea
        }
        });
        setListaTareas(tareaFiltrada)
}

    

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title d-flex justify-content-center">To Do List</h1>
                    <form className="container">
                        <div className="mb-3">

                            <input type="text" className="form-control" id="exampleInputTarea" aria-describedby="tareaHelp"
                                onChange={
                                    (e) => setTarea(e.target.value)
                                }
                                onKeyDown={handleSubmit}
                                value={tarea}/>
                        </div>


                    </form>
                    <div className="card">
                        <ul className="list-group list-group-flush">
                            {listaTareas.map((tarea, i) => {
								return (
                                    <li className="list-group-item border border-1 tareaOculta" key={i}>
                                        {tarea}<span className="close" onClick={() => eliminarTarea(i)}>x</span>
                                    </li>
                                );
                            })}</ul>

                            <div className="alert-secondary">{listaTareas.length == 0 ? "Sin tareas, agregar tareas." : "Número de tareas: " +listaTareas.length}</div>

                    </div>

                </div>
            </div>
        </div>

    );
};


export default Home;
