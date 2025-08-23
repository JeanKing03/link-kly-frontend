"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);

  const handleSuccess = () => {
    onClose();
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 border-0">
        <DialogTitle className="sr-only">
          {isLogin ? "Iniciar sesión" : "Crear cuenta"}
        </DialogTitle>
        {isLogin ? (
          <LoginForm onToggleMode={toggleMode} onSuccess={handleSuccess} />
        ) : (
          <RegisterForm onToggleMode={toggleMode} onSuccess={handleSuccess} />
        )}
      </DialogContent>
    </Dialog>
  );
}
