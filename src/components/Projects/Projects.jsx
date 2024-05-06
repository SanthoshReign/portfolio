import React from 'react';
import './Projects.css';
import tictactoe from '../../assets/tictactoe.png';
import ECommerce from '../../assets/e-commerce.jpeg';
import toDoList from '../../assets/todolist.webp';
import mealsApp from '../../assets/mealsApp.jpeg';

const Projects = () => {
  return (
    <>
        <section id="projects">
            <h2 className="projectTitle">My Projects</h2>
            <div className="projects">
                <div className="card">
                    <img src={tictactoe} className="card-img" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Tic Tac Toe</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="https://santhoshreign.github.io/Tic-Tac-Toe-React/" className="btn">Go To Project</a>
                    </div>
                </div>
                <div className="card">
                    <img src={ECommerce} className="card-img" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">E-Commerce App</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="https://santhoshreign.github.io/E-Commerce-React-/" className="btn">Go To Project</a>
                    </div>
                </div>
                <div className="card">
                    <img src={toDoList} className="card-img" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">To Do List</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="https://santhoshreign.github.io/ToDoList-React/" className="btn">Go To Project</a>
                    </div>
                </div>
                <div className="card">
                    <img src={mealsApp} className="card-img" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Meals App</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="https://santhoshreign.github.io/Meals-App/" className="btn">Go To Project</a>
                    </div>
                </div>
            </div>
        </section>
    </>    
  )
}

export default Projects;