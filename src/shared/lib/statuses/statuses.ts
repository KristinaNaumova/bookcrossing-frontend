const DirectionStatus = {
    1: 'ожидает исполнения',
    2: 'на исполнении',
    3: 'исполнено'
}

const ActionTypes = {
    1: 'Прием',
    2: 'Перемещение',
    3: 'Отправка'
}

const JobStages = {
    1: 'Специалист',
    2: 'Технический ресурс',
    3: 'Технический ресурс + оператор'
}

const CargoFront = {
    1: 'Море',
    2: 'Ж/Д',
    3: 'Авто'
}

const CargoStatus = {
    1: 'Ожидается',
    2: 'В порту',
    3: 'Отправлен'
}


export {DirectionStatus, ActionTypes, JobStages, CargoFront, CargoStatus}
