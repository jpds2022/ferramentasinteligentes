import React from 'react';
import ReactDOM from 'react-dom';
import CalculadoraFerias from './components/CalculadoraFerias';
import AnuncioPlaceholder from './components/AnuncioPlaceholder';
import './styles/tailwind.css';

const App = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Ferramentas Online</h1>
            <AnuncioPlaceholder />
            <CalculadoraFerias />
            <AnuncioPlaceholder />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));