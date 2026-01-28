const Button = ({ children, variant = 'primary', size = 'md', onClick, href, className = '' }) => {
    const baseClasses = 'font-bold rounded-lg transition-all duration-200 inline-flex items-center justify-center';

    const variants = {
        primary: 'bg-gradient-to-r from-electric-yellow to-electric-orange text-electric-dark hover:shadow-xl hover:scale-105',
        secondary: 'bg-electric-blue text-white hover:bg-blue-700',
        outline: 'border-2 border-electric-yellow text-electric-yellow hover:bg-electric-yellow hover:text-electric-dark',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <a href={href} className={classes}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={classes}>
            {children}
        </button>
    );
};

export default Button;
