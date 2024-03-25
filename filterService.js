const applyFilters = (filters, responses) => {
    if (!filters || !filters.length) return responses;
    
    return responses.filter((response) => {
        // Assume all conditions are met until proven otherwise
        let conditionsMet = true;
        
        // Apply each filter as an AND condition
        filters.forEach(filter => {
            const question = response.questions.find(q => q.id === filter.id);
            
            if (!question) {
                conditionsMet = false;
                return;
            }
            
            const value = question.value;
            const filterValue = filter.value;
            
            switch(filter.condition) {
                case 'equals':
                if (question.type === 'DatePicker') {
                    conditionsMet = new Date(value).toISOString().split('T')[0] === new Date(filterValue).toISOString().split('T')[0];
                } else {
                    conditionsMet = value === filterValue;
                }
                break;
                case 'does_not_equal':
                if (question.type === 'DatePicker') {
                    conditionsMet = new Date(value).toISOString().split('T')[0] !== new Date(filterValue).toISOString().split('T')[0];
                } else {
                    conditionsMet = value !== filterValue;
                }
                break;
                case 'greater_than':
                conditionsMet = question.type === 'DatePicker' ? new Date(value) > new Date(filterValue) : value > filterValue;
                break;
                case 'less_than':
                conditionsMet = question.type === 'DatePicker' ? new Date(value) < new Date(filterValue) : value < filterValue;
                break;
                default:
                // Invalid condition
                conditionsMet = false;
            }
        });
        
        // Only include response if all conditions are met
        return conditionsMet;
    });
};


module.exports = { applyFilters };