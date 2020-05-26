import { createSelector } from 'reselect'

export const optionsListSelector = state => {
    return Object.values(state.options.optionsList)
};

export const selectedIdsSelector = state => {
    return state.options.selected;
}

export const selectedOptionsSelector = createSelector(
    [optionsListSelector, selectedIdsSelector],
    (allOptionsList, selectedIds) => {
        return allOptionsList.filter(option => selectedIds.includes(option.id))
    }
)

export const availableOprionsSelector = createSelector(
    [optionsListSelector, selectedIdsSelector],
    (allOptionsList, selectedIds) => {
        return allOptionsList.filter(option => !selectedIds.includes(option.id))
    }
)