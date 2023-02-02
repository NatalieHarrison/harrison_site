/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Reviews } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
import { DataStore } from '@aws-amplify/datastore';
import { Reviews } from './models';

await DataStore.save(
  new Reviews({
  "name": "Lorem ipsum dolor sit amet",
  "company": "Lorem ipsum dolor sit amet",
  "comment": "Lorem ipsum dolor sit amet",
  "date": "1970-01-01Z"
})
);

export default function ReviewsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    company: "",
    comment: "",
    date: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [company, setCompany] = React.useState(initialValues.company);
  const [comment, setComment] = React.useState(initialValues.comment);
  const [date, setDate] = React.useState(initialValues.date);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setCompany(initialValues.company);
    setComment(initialValues.comment);
    setDate(initialValues.date);
    setErrors({});
  };
  const validations = {
    name: [],
    company: [],
    comment: [],
    date: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="20px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          company,
          comment,
          date,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Reviews(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ReviewsCreateForm")}
      {...rest}
    >
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid0")}
      >
        <TextField
          label="Name"
          isRequired={false}
          isReadOnly={false}
          value={name}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                name: value,
                company,
                comment,
                date,
              };
              const result = onChange(modelFields);
              value = result?.name ?? value;
            }
            if (errors.name?.hasError) {
              runValidationTasks("name", value);
            }
            setName(value);
          }}
          onBlur={() => runValidationTasks("name", name)}
          errorMessage={errors.name?.errorMessage}
          hasError={errors.name?.hasError}
          {...getOverrideProps(overrides, "name")}
        ></TextField>
        <TextField
          label="Company"
          isRequired={false}
          isReadOnly={false}
          value={company}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                name,
                company: value,
                comment,
                date,
              };
              const result = onChange(modelFields);
              value = result?.company ?? value;
            }
            if (errors.company?.hasError) {
              runValidationTasks("company", value);
            }
            setCompany(value);
          }}
          onBlur={() => runValidationTasks("company", company)}
          errorMessage={errors.company?.errorMessage}
          hasError={errors.company?.hasError}
          {...getOverrideProps(overrides, "company")}
        ></TextField>
      </Grid>
      <TextField
        label="Comment"
        isRequired={false}
        isReadOnly={false}
        value={comment}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              company,
              comment: value,
              date,
            };
            const result = onChange(modelFields);
            value = result?.comment ?? value;
          }
          if (errors.comment?.hasError) {
            runValidationTasks("comment", value);
          }
          setComment(value);
        }}
        onBlur={() => runValidationTasks("comment", comment)}
        errorMessage={errors.comment?.errorMessage}
        hasError={errors.comment?.hasError}
        {...getOverrideProps(overrides, "comment")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              company,
              comment,
              date: value,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="20px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
