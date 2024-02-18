import { SELECT_COURSE, DESELECT_COURSE } from '../actions/actionTypes';

const initialState = {
  list: [
    { id: 1, name: 'Historical Roots and Legacies of Slavery', description: 'Impact of slavery on Brazilian society, culture, and economy', imageUrl: '/images/Escrava_Anastacia.jpg', branch: 'brazil' }, 
    { id: 2, name: 'Racialized Violence and Police Brutality', description: 'Impacts of militarized policing and "war on drugs" policies on marginalized communities', imageUrl: '/images/operacao.jpg', branch: 'brazil' },
    { id: 3, name: 'Cultural Representations and Resistance', description: 'Afro-Brazilian cultural expressions: music, dance, literature, and other arts', imageUrl: '/images/favelavive.jpg', branch: 'brazil' },
    { id: 4, name: 'Land Rights and Indigenous Resistance', description: 'Historical dispossession of Indigenous lands and violence against Indigenous peoples', imageUrl: '/images/indigenas.jpg', branch: 'brazil' },
    { id: 5, name: 'XCZ', description: 'Historical dispossession of Indigenous lands and violence against Indigenous peoples', imageUrl: '/images/indigenas.jpg', branch: 'antisemitism' },
    
  ],
  selectedCourses: [],
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_COURSE:
      return {
        ...state,
        selectedCourses: [...state.selectedCourses, action.payload],
      };
    case DESELECT_COURSE:
      return {
        ...state,
        selectedCourses: state.selectedCourses.filter(courseId => courseId !== action.payload),
      };
    default:
      return state;
  }
};

export default courseReducer;


