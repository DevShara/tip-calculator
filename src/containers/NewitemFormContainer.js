import { connect } from 'react-redux';
import { NewItemForm } from '../components/NewitemForm';

export const NewItemFormContainer =   connect()(NewItemForm);