const ComplianceBar = () => {
  return (
    <div className="bg-gradient-accent border-b border-accent">
      <div className="container mx-auto px-4 py-2">
        <div className="text-center">
          <p className="text-sm text-accent-foreground">
            <span className="font-semibold">CBN-licensed Microfinance Bank</span> (License: LICENSE_NO) •{" "}
            <span className="font-semibold">SEC-licensed Crowdfunding Platform</span> (Ref: SEC_NO) •{" "}
            <span className="font-semibold">Bank‑grade Security</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComplianceBar;