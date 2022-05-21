import {FormInputLabel, Input, Group} from "./form-input.styles.js";

const FormInput = ({ label, ...otherProps }) => {
    return (
        <Group>
            <Input
                className="form-input"
                {...otherProps}
            />
            {FormInputLabel && (
                <label
                    className={`${otherProps.value.length ? "shrink" : null} form-input-label`}>{label}
                </label>
            )}
            
        </Group>

    )
};

export default FormInput;