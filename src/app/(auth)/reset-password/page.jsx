import React, { Suspense } from 'react';
import ResetPasswordForm from './reset-password-form';

const ResetPasswordPage = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <h2>Reset Password</h2>
                {/* Add your reset password form here */}
                <ResetPasswordForm></ResetPasswordForm>
            </Suspense>
        </div>
    );
};

export default ResetPasswordPage;