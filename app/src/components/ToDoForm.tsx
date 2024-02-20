import { ErrorMessage, Field, Formik, Form } from 'formik';
import React from 'react';
import { object, string } from 'yup';

import { TextField } from './common/TextField';
import { Button } from './common/Button';

interface IValue {
  description: string;
}

const validationSchema = object().shape({
  description: string().required(),
});

export const TodoForm: React.FC = () => {
  const ipcRenderer = (window as any).ipcRenderer;

  const initialValues: IValue = {
    description: '',
  };

  const onSubmit = (values: IValue) => {
    console.log('values', values);

    ipcRenderer.send('submit:todoForm', values);
  };

  return (
    <>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="shadow border rounded-md p-4 my-4">
            <label htmlFor="description" className="font-bold">
              Task Description
            </label>
            <div className="my-4">
              <Field
                name="description"
                id="description"
                component={TextField}
                placeholder="Enter Description Here"
                autoFocus={true}
                className="custom-class"
              />
              <ErrorMessage
                component="span"
                name="description"
                className="text-red-500 text-sm"
              />
            </div>
            <Button text="Add" />
          </Form>
        </Formik>
      </div>
    </>
  );
};
