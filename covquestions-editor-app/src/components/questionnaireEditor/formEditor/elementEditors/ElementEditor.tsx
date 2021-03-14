import { JSONSchema7 } from "json-schema";
import React from "react";
import MuiForm from "@rjsf/material-ui";
import { IChangeEvent } from "@rjsf/core";
import { debounce } from "lodash";

type ElementEditorProps<T> = {
  schema: JSONSchema7;
  formData: T;
  onChange: (formData: T, hasErrors: boolean) => void;
  addAdditionalValidationErrors: (formData: T, errors: any) => void;
  uiSchema?: any;
  className?: string;
};

export function ElementEditor<T>(props: ElementEditorProps<T>) {
  const onValidate = (formData: T, errors: any) => {
    props.addAdditionalValidationErrors(formData, errors);

    return errors;
  };

  if (props.schema === undefined) {
    return null;
  }

  const onChange = (event: IChangeEvent) => {
    props.onChange(event.formData, event.errors.length > 0);
  };

  const debouncedOnChange = debounce(onChange, 500);

  return (
    <MuiForm
      className={props.className}
      schema={props.schema}
      formData={props.formData}
      onChange={debouncedOnChange}
      uiSchema={props.uiSchema}
      liveValidate={true}
      showErrorList={false}
      validate={onValidate}
    >
      <div>{/* Empty div to hide submit button of MuiForm */}</div>
    </MuiForm>
  );
}
