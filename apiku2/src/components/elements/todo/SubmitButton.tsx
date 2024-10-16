import { Button } from "@chakra-ui/react";


type SubmitButtonProps = {
    formID: string
    disabled?: boolean
    className?: string
}


export default function SubmitButton(props: SubmitButtonProps) {
    const {disabled, formID, className} = props
    return (
        <Button
                bg="#fff"
                color="#000"
                border="2px solid #000"
                boxShadow="2px 2px 0 #000"
                _hover={{ bg: "#E0E0E0" }}
                height="40px"
                px={6}
                fontSize="md"
                form={formID}
                type="submit"
                className={`${className}`}
                
              >
                {!disabled ? 'post' :(
                    <>
                <span role="img" aria-label="refresh">🔄</span>Post
                    </>
                )}
              </Button>
    );
}