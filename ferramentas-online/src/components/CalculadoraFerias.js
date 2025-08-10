import React, { useState } from 'react';

const CalculadoraFerias = () => {
    const [salario, setSalario] = useState('');
    const [diasFerias, setDiasFerias] = useState('');
    const [resultado, setResultado] = useState(null);

    const calcularFerias = () => {
        const salarioMensal = parseFloat(salario);
        const dias = parseInt(diasFerias);

        if (!isNaN(salarioMensal) && !isNaN(dias)) {
            const valorFerias = (salarioMensal / 30) * dias;
            setResultado(valorFerias.toFixed(2));
        } else {
            setResultado(null);
            alert('Por favor, insira valores válidos.');
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Calculadora de Férias</h1>
            <div className="mb-4">
                <label className="block mb-2">Salário Mensal:</label>
                <input
                    type="number"
                    value={salario}
                    onChange={(e) => setSalario(e.target.value)}
                    className="border p-2 w-full"
                    placeholder="Digite seu salário mensal"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Dias de Férias:</label>
                <input
                    type="number"
                    value={diasFerias}
                    onChange={(e) => setDiasFerias(e.target.value)}
                    className="border p-2 w-full"
                    placeholder="Digite o número de dias de férias"
                />
            </div>
            <button
                onClick={calcularFerias}
                className="bg-blue-500 text-white p-2 rounded"
            >
                Calcular
            </button>
            {resultado !== null && (
                <div className="mt-4">
                    <h2 className="text-xl">Valor das Férias: R$ {resultado}</h2>
                </div>
            )}
        </div>
    );
};

export default CalculadoraFerias;