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
        removeCounter,
        restartCounter,
    };
    const state = Object.assign(defState, curState);

    function restartCounter() {
        state.currentCounter.count = 0;
        callOnCountChange();
    }

    function increaseCounter() {
        state.currentCounter.count += 1;
        callOnCountChange();
    }

    function callOnCountChange() {
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
        callOnCounterChange(counter);
    }

    function removeCounter(id) {
        state.counters = state.counters.filter(e => e.id !== id);
        if (!state.counters.length) {
            addCounter(buildCounter("new-one"));
            return;
        }
        if (state.currentCounter.id === id) {
            changeCurrentCounter(state.counters[0].id);
        }
        callOnCounterChange();
    }

    function callOnCounterChange(counter) {
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