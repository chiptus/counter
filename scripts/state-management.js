function createState(curState = {}) {
    const defCounter = {
        count: 0,
        name: "Name",
        id: 0
    }
    const defState = {
        counters: [defCounter, buildCounter("name1", 0)],
        currentCounter: defCounter,
        increaseCounter,
        changeName,
        changeCurrentCounter,
        addCounter,
    };
    const state = Object.assign(defState, curState);

    function increaseCounter() {
        state.currentCounter.count += 1;
        if (state.onCountChange) {
            state.onCountChange(state.currentCounter.count);
        }
    }

    function changeName(name) {
        state.currentCounter.name = name;
        if (state.onNameChange) {
            state.onNameChange(name);
        }
    }

    function changeCurrentCounter(counterId) {
        const counter = findAndRemoveFromArray(state.counters, c => c.id === counterId);
        if (!counter) {
            throw new Error("Didn't find counter with the following id" + counterId);
        }
        addCounter(counter)
    }

    function addCounter(counter) {
        state.counters.unshift(counter);
        state.currentCounter = counter;
        if (state.onCounterChange) {
            state.onCounterChange(counter);
        }
    }

    return state;
}

function getStateFromStorage() {
    const stateString = localStorage.getItem("state");
    let state = stateString ? JSON.parse(stateString) : {};
    saveStateToStorage(state);
    return createState(state);
}

function saveStateToStorage(state = {}) {
    localStorage.setItem("state", JSON.stringify(state));
}