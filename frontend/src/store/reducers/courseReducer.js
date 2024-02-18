import { SELECT_COURSE, DESELECT_COURSE } from '../actions/actionTypes';

const initialState = {
  list: [
    { id: 1, name: 'Historical Roots and Legacies of Slavery', description: 'Impact of slavery on Brazilian society, culture, and economy', imageUrl: '/images/Escrava_Anastacia.jpg', branch: 'brazil' }, 
    { id: 2, name: 'Racialized Violence and Police Brutality', description: 'Impacts of militarized policing and "war on drugs" policies on marginalized communities', imageUrl: '/images/operacao.jpg', branch: 'brazil' },
    { id: 3, name: 'Cultural Representations and Resistance', description: 'Afro-Brazilian cultural expressions: music, dance, literature, and other arts', imageUrl: '/images/favelavive.jpg', branch: 'brazil' },
    { id: 4, name: 'Land Rights and Indigenous Resistance', description: 'Historical dispossession of Indigenous lands and violence against Indigenous peoples', imageUrl: '/images/indigenas.jpg', branch: 'brazil' },
    { id: 5, name: 'Historical Roots of Antisemitism', description: 'From ancient times to the present day', imageUrl: '/images/folio-pic1.png', branch: 'antisemitism' },
    { id: 6, name: 'Israeli History and Nation Building', description: 'The establishment of the State of Israel', imageUrl: '/images/folio-pic2.jpg', branch: 'antisemitism' },
    { id: 7, name: 'Antisemitism in Contemporary Context', description: 'Contemporary antisemitic incidents', imageUrl: '/images/folio-pic3.jpg', branch: 'antisemitism' },
    { id: 8, name: 'Israeli-Palestinian Conflict', description: 'Origins and early conflicts', imageUrl: '/images/folio-pic4.jpg', branch: 'antisemitism' },
    { id: 9, name: 'Global Economic Consequences of COVID-19', description: 'Analysis of the macroeconomic effects of the pandemic', imageUrl: '/images/covid1.jpg', branch: 'covid' },
    { id: 10, name: 'Sectoral Impacts and Disruptions', description: 'Study of the differential impacts of the pandemic on various sectors of the economy', imageUrl: '/images/covid3.webp', branch: 'covid' },
    { id: 11, name: 'Healthcare Innovations and Scientific Advancements', description: 'Examination of the role of technology, data science, and artificial intelligence in pandemic response and preparedness', imageUrl: '/images/covid2.jpg', branch: 'covid' },
    { id: 12, name: 'Social and Cultural Impacts of the Pandemic', description: 'Study of the social and cultural dimensions of the COVID-19 pandemic', imageUrl: '/images/covid4.jpg', branch: 'covid' },
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


