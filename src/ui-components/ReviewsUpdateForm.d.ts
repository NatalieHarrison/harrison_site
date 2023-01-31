/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Reviews } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReviewsUpdateFormInputValues = {
    name?: string;
    company?: string;
    comment?: string;
    date?: string;
};
export declare type ReviewsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    company?: ValidationFunction<string>;
    comment?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewsUpdateFormOverridesProps = {
    ReviewsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    company?: PrimitiveOverrideProps<TextFieldProps>;
    comment?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReviewsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReviewsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    reviews?: Reviews;
    onSubmit?: (fields: ReviewsUpdateFormInputValues) => ReviewsUpdateFormInputValues;
    onSuccess?: (fields: ReviewsUpdateFormInputValues) => void;
    onError?: (fields: ReviewsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReviewsUpdateFormInputValues) => ReviewsUpdateFormInputValues;
    onValidate?: ReviewsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReviewsUpdateForm(props: ReviewsUpdateFormProps): React.ReactElement;
