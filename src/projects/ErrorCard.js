export default function ErrorCard({ isError, error }) {
    return (isError && error instanceof Error ? (
        <div className="row">
            <div className="card large error">
                <section>
                    <p>
                        <span className="icon-alert inverse "></span>
                        {error.message}
                    </p>
                </section>
            </div>
        </div>
    ) : null);
}